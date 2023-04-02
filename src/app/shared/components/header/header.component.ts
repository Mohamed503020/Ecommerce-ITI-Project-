import { ProductService } from './../../../product/services/product.service';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService,
    private _productService:ProductService,
    private router:Router,
    private _authsrv:AuthService
    ){}
   cartitem:any;
   cartLength:any;
   wishlistItem:any=[];
   allproducts:any;
   searchQuery='';
   searchResults:any;
   categories:any;
   logged:boolean=false;
   //header stiky
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 300) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  ngOnInit(): void {
    this.cartLength=localStorage.getItem('cartItemlength')
    this.getAllProductFromCart();
   this._wishlistService.getAllWishlist().subscribe({
  next:(data)=>{
    this.wishlistItem= data
  }
 });
  //  this.cartitem= this._cartService.getCartItems()
  //  this.getCategires()
if(localStorage.getItem('user')){
  this.logged=true
}
else{this.logged=false}
}

getAllProductFromCart(){
  this._cartService.getAllCartPrd().subscribe({
    next:(res)=>{
      this.cartitem=res;

    }
  })
}

logout(){
this._authsrv.islogin.next(false);

}


  getCategires(){
    this._productService.getAllCategory().subscribe({
      next:data=>{this.categories=data}
    })
  }


}
