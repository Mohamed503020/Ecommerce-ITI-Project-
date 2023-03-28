import { HotToastService } from '@ngneat/hot-toast';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  route = "Cart"
  ProductsInCart: any[] = [];
  subTotalPrice: number = 0;
  TAX = 20;
  product_id!: number;
  TotalPrice: number = 0;
  itemCount !: number;
  cartLength !: number;
  


  constructor(private _CartService: CartService, private _toast: HotToastService) { }



  ngOnInit(): void {

    this.getProductFromCart()
    console.log(this.ProductsInCart);
    // this.calcSubTotalPrice()
    this.TotalPrice = this.subTotalPrice + this.TAX

  }

  // temCount(): void{
  //   this._CartService.getItemCount().subscribe(count => {
  //     this.itemCount = count;
  //   });
    // this._CartService.getCartLength()
    // .then((length: number) => this.cartLength = length)
    // .catch((error: any) => console.error(error));
  // }
getproductfromcart(){
  this._CartService.getproductfromcart().subscribe({
    next:(data)=> this.ProductsInCart=data
  })

}

  onDeletProductFromCart(id:any) {
    this._CartService.DeleteProductfromcart(String(id)).subscribe({
      next: (data) => console.log(data)
    })
  }
  // calcSubTotalPrice() {
  //   this.subTotalPrice = this._CartService.getTotalPrice()
  // }
  // calcTotalPrice() {
  //   this.TotalPrice = this.subTotalPrice + this.TAX
  // }
  getProductFromCart() {
    this._CartService.getproductfromcart().subscribe({
      next:(data)=> this.ProductsInCart=data
    })

  }
  // deletProductFromCart(product: any) {
  //   this._CartService.removeProductFromCart(product)
  //   this.calcSubTotalPrice()
  //   this.calcTotalPrice()
  // }

  // increaseQuantity(product: any) {
  //   this._CartService.increaseQuantity(product)
  //   this.calcSubTotalPrice()
  //   this.calcTotalPrice()

  // }

  // decreaseQuantity(product: any) {
  //   this._CartService.decreaseQuantity(product)
  //   this.calcSubTotalPrice()
  //   this.calcTotalPrice()
  // }

}
