import { ProductService } from './../../../product/services/product.service';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { NavigationExtras, Router } from '@angular/router';

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
    private router:Router
    ){}
   cartitem:any;
   wishlistItem:any;
   allproducts:any;
   searchQuery='';
   searchResults:any;
   categories:any;
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
 this.wishlistItem=   this._wishlistService.getwishlistItems()
   this.cartitem= this._cartService.getCartItems()
  //  this.getCategires()
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
  // }
}
