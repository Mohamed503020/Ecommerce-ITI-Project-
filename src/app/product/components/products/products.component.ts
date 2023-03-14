import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product:any;

  constructor(private _cartService:CartService){

  }

  addProductTocart(){
    this._cartService.addProductToCart(this.product)
  }
}
