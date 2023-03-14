
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  ProductsInCart:any[]=[];
  subTotalPrice:number=0;
  TAX=20;
  TotalPrice:number=0;
constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this.getProductFromCart()
    console.log(this.ProductsInCart);


    this.calcSubTotalPrice()
    this.TotalPrice= this.subTotalPrice + this.TAX

  }
  calcSubTotalPrice(){
    this.subTotalPrice=this._CartService.getTotalPrice()
  }
  calcTotalPrice(){
    this.TotalPrice= this.subTotalPrice + this.TAX
  }
  getProductFromCart(){
    this.ProductsInCart=this._CartService.getCartItems()

  }
  deletProductFromCart(product:any){
    this._CartService.removeProductFromCart(product)
  }

  increaseQuantity(product:any){
    this._CartService.increaseQuantity(product)
    this.calcSubTotalPrice()
    this.calcTotalPrice()

  }

  decreaseQuantity(product:any){
    this._CartService.decreaseQuantity(product)
    this.calcSubTotalPrice()
    this.calcTotalPrice()
  }



}
