import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {
  //
  route="Wishlist"
  productInWhislis:any;
  constructor(
    private _wishlisService:WishlistService,
    private _cartService:CartService
    ){

  }

  ngOnInit(): void {

    this.getProductFromWishlist()
  }

  getProductFromWishlist(){
    this.productInWhislis=this._wishlisService.getwishlistItems()
  }

  addProductToCart(product:any){
this._cartService.addProductToCart(product)
  }

  removeProductFromWishlist(product:any){
this._wishlisService.removeProduct(product);
this.getProductFromWishlist()
  }
}
