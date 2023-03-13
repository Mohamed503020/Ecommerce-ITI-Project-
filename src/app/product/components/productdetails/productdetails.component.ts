import { ProductService } from './../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit,OnDestroy {
  backgroundPos: string = 'center center';
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  quantity=1;
  product :any;
  product_id!:number;
  subsucription!:Subscription;
  ImgUrl:string=''
constructor (
  private _ProductService:ProductService,
  private _ActivatedRoute:ActivatedRoute
  ){

}

  ngOnInit(): void {
    this.product_id=Number(this._ActivatedRoute.snapshot.paramMap.get("id"))
    this.getProduct()

  }

  getProduct(){
   this.subsucription= this._ProductService.getSingleProduct(this.product_id).subscribe({
      next:data=>{this.product=data;
        this.ImgUrl=this.product?.images[1]
      },
      error:error=>alert(error.message)
    })
  }

  changeImg(src:string){
this.ImgUrl=src
  }
  addProductToCart(item:any){}
  addProductToWishList(item:any){}

  updateCartItemQuantity(value: number, product: any, operation: string) {
    if (operation == "+") {
      value++;
    } else {
      value--;
    }
  }
  ngOnDestroy(): void {
    this.subsucription.unsubscribe()
  }
}
