import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WishlistService } from 'src/app/wishlist-list/services/wishlist.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  route = "Product"
  backgroundPos: string = 'center center';
  @ViewChild("myCarousel") myCarousel!: ElementRef;
  // @Input() data:any=[]
  // @Output() item = new EventEmitter()
  // quantity = 1;
  // product!: Product;
  // cat!: string;
  // productsOfCategory!: any
  // product_id!: number;
  // subsucription!: Subscription;
  // ImgUrl: string = ''
  // // public cartadd = [];
  // constructor(
  //   private _ProductService: ProductService,
  //   private _ActivatedRoute: ActivatedRoute,
  //   private _cartService: CartService,
  //   private _wishListService: WishlistService,

  quantity=1;
  product! :Product;
  cat!:string;
  productsOfCategory!:any
  product_id!:number;
  subsucription!:Subscription;
  ImgUrl:string=''
constructor (
  private _ProductService:ProductService,
  private _ActivatedRoute:ActivatedRoute,
  private _WishlistService:WishlistService,
  private _CartService:CartService){}

  
  ngAfterViewInit(): void {
    this.getProductsCategory()
  }

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe(params => {
      this.product_id = params['id'];
      this.getProduct();
      this.addProductToCart();

    })


  }
  // add() {
  //   this.item.emit(this.data)
  // }


  getProduct() {
    this.subsucription = this._ProductService.getSingleProduct(this.product_id).subscribe({
      next: data => {
        this.product = data;
        this.ImgUrl = data.images[1];

      },
      error: error => alert(error.message)
    })
  }
  getProductsCategory() {
    this._ProductService.getProductsByCategory(this.product.category).subscribe({
      next: (item) => { this.productsOfCategory = item.data },
      error: error => alert(error.message)
    })
  }

  changeImg(src: string) {
    this.ImgUrl = src
  }
  addProductToCart(){
    this._CartService.AddItemCart(this.product_id).subscribe({
      next:(res)=>{
        console.log(res);
        console.log("Done");
      },
      error:(err)=>{
        console.log(err);
        console.log("errrrrrrrrrror");
      }
    })
  }
  addProductToWishList(id:any){
    this._WishlistService.AddItemWishlist(id).subscribe({
      next:(res)=>{
        console.log(res);
        console.log("Done");
      },
      error:(err)=>{
        console.log(err);
        console.log("errrrrrrrrrror");
      }
    })

  }

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
