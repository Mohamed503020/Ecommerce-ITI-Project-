import { Product } from './../../model/product';
import { HotToastService } from '@ngneat/hot-toast';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product:Product={} as Product;

  constructor(
    private _cartService:CartService,
    private _wishListService:WishlistService,
    private _toast:HotToastService
    ){

  }

<<<<<<< HEAD
  // addProductTocart(){
  //   this._cartService.addProductToCart(this.product)
=======
  addProductTocart(){
    // this._cartService.addProductToCart(this.product)
>>>>>>> efecd899d275ff8d67082dab6f41703345621b68

  // }
  addProductToWishlist(){
// this._wishListService.saddProduct(this.product)

  }
}
