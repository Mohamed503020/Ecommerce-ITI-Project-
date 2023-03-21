import { ProductService } from './../../services/product.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit,OnDestroy {
  route="Product"
  backgroundPos: string = 'center center';
  @ViewChild("myCarousel") myCarousel!: ElementRef;
  slider3Settings: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      },
      1600: {
        items: 5
      }
    },
    nav: true,
  }
  quantity=1;
  product :any;
  cat!:any;
  productsOfCategory:any[]=[]
  product_id!:number;
  subsucription!:Subscription;
  ImgUrl:string=''
constructor (
  private _ProductService:ProductService,
  private _ActivatedRoute:ActivatedRoute,

  ){

}

  ngOnInit(): void {
   this._ActivatedRoute.params.subscribe(params => {
    this.product_id = params['id'];
    this.getProduct()

   })
  }

  getProduct(){
   this.subsucription= this._ProductService.getSingleProduct(this.product_id).subscribe({
      next:data=>{this.product=data;
        this.ImgUrl=this.product?.images[1]
      this.cat =data.category;
      this.getProductsCategores()
      },
      error:error=>alert(error.message)
    })
  }
  getProductsCategores(){


    this._ProductService.getProductsByCategory(this.cat).subscribe({

      next:res=>{this.productsOfCategory=res.products}
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
