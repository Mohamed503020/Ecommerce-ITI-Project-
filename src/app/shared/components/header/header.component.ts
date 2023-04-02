import { ProductService } from './../../../product/services/product.service';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { AfterContentChecked, AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterContentChecked {
  sticky: boolean = false;
  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService,
    private _productService:ProductService,
    private router:Router,
    private _authsrv:AuthService
    ){}
  ngAfterContentChecked(): void {
    this.cartLength=localStorage.getItem('cartItemlength');
    this.wishlistItem=localStorage.getItem('wishlistPrd');
  }
   cartitem:any;
   cartLength:any;
   wishlistItem:any;
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
    this._cartService.getAllCartPrd().subscribe({
      next:(res)=>{
        localStorage.setItem('cartItemlength', res.length);
      },
      error:()=>{
        localStorage.setItem('cartItemlength', '0');
      }
    })
    this._wishlistService.getAllWishlist().subscribe({
      next:(res)=>{
        localStorage.setItem('wishlistPrd',res.length);
      },
      error:()=>{
        localStorage.setItem('wishlistPrd', '0');
      }
    })
 
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
  // searchProducts() {
  //   if (this.searchQuery.length > 0) {
  //     this._productService.getProduct().subscribe((data) => {
  //       this.searchResults = data.filter((product:any) => {
  //         return product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
  //       });
  //       const state = { myData: this.searchResults };
  //       const extras: NavigationExtras = { state };
  //       this.router.navigate(['/main/products/search'], );
  //     });
  //   } else {
  //     this.searchResults = [];
  //   }
  // }

  // getCategires(){
  //   this._productService.getAllCategory().subscribe({
  //     next:data=>{this.categories=data}
  //   })
  // }s


}
