import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WishlistService } from 'src/app/wishlist-list/services/wishlist.service';
import { CartService } from 'src/app/cart/services/cart.service';
import Swal from 'sweetalert2';
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

  quantity = 1;
  product!: Product;
  cat!: string;
  productsOfCategory!: any
  product_id!: number;
  subsucription!: Subscription;
  ImgUrl: string = ''
  produtincart: any;
  foundproduct: any;
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private _route: Router) { }


  ngAfterViewInit(): void {
    this.getProductsCategory()
  }

  ngOnInit(): void {
    // this.getProductfromCart()
    this._ActivatedRoute.params.subscribe(params => {
      this.product_id = params['id'];
      this.getProduct();
<<<<<<< HEAD
      this.addProductToCart();
      this.getProductsCategory()

    })
    // this._ActivatedRoute.params.subscribe(params => {
    //   this.product_id = params['cat'];
    //   this.getProduct();
    //   this.addProductToCart();
    // })
=======
      // this.addProductToCart();

    })
    this._ActivatedRoute.params.subscribe(params => {
      this.product_id = params['cat'];
      this.getProduct();
      // this.addProductToCart();
    })
>>>>>>> MohamedIbrahim


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
      next: (item) => { this.productsOfCategory = item },
      error: error => alert(error.message)
    })
  }

  changeImg(src: string) {
    this.ImgUrl = src
  }
  addProductToCart() {
    if (localStorage.getItem('token')) {
      this._CartService.AddItemCart(this.product_id).subscribe({
        next: (res) => {
          console.log(res);
          console.log("Done");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added Succefully ',
            showConfirmButton: false,
            timer: 2500
          })
        },
        error: (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'product already existed',
            showConfirmButton: false,
            timer: 2500
          })
        }
      })

    }
    else {
      this._route.navigateByUrl("/auth/login")

    }

  }
  addProductToWishList(id: any) {
    if(localStorage.getItem('token')){
      this._WishlistService.AddItemWishlist(id).subscribe({
        next: (res) => {
          console.log(res);
          console.log("Done");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added Succefully ',
            showConfirmButton: false,
            timer: 2500
          })
        },
        error: (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'product already existed',
            showConfirmButton: false,
            timer: 2500
          })
        }
      })
    }
   

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

  // getProductfromCart() {
  //   this._CartService.getAllCartPrd().subscribe({
  //     next: (res) => {

  //       this.foundproduct = this.produtincart.find((item: any) => {


  //         return item.id = this.product_id
  //       })
  //       this.produtincart = res;
  //     },
  //     error: (error) => {
  //       console.log(error.message);

  //     }
  //   })
  // }
}
