import { HotToastService } from '@ngneat/hot-toast';

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  route="Cart"
  ProductsInCart:any;
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
    // this.subTotalPrice=this._CartService.getTotalPrice()
  }
  calcTotalPrice(){
    this.TotalPrice= this.subTotalPrice + this.TAX
  }
  getProductFromCart(){
    this._CartService.getAllCartPrd().subscribe({
      next:(res)=>{
        this.ProductsInCart=res;
        console.log(this.ProductsInCart)
        console.log("result done")
        localStorage.setItem('cartItemlength',this.ProductsInCart.length)
      }
    })

  }
  deletProductFromCart(product:any){
    this._CartService.DeleteItemCart(product.id).subscribe({
      next:(res)=>{
        console.log(res);
        console.log("done deleted");
        this.getProductFromCart();
      },
      error:(err)=>{
              console.log(err);
              console.log("errrrrrrrrrrrrrrrreoroo");
              this.getProductFromCart();        
            }
    });
    this.calcSubTotalPrice()
    this.calcTotalPrice()
  }

  increaseQuantity(product:any){
    // this._CartService.increaseQuantity(product)
    this.calcSubTotalPrice()
    this.calcTotalPrice()

  }

  decreaseQuantity(product:any){
    // this._CartService.decreaseQuantity(product)
    this.calcSubTotalPrice()
    this.calcTotalPrice()
  }



}
