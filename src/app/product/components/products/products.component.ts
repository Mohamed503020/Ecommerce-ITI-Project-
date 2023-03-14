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
  @Input() product:any;

  constructor(
    private _cartService:CartService,
    private _wishListService:WishlistService,
    private _toast:HotToastService
    ){

  }

  addProductTocart(){
    this._cartService.addProductToCart(this.product)

  }
  addProductToWishlist(){
this._wishListService.addProduct(this.product)

  }
}
