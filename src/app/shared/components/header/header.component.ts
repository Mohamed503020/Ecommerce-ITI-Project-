import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService
    ){}
   cartitem:any;
   wishlistItem:any;
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
  }
}
