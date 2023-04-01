import { HotToastService } from '@ngneat/hot-toast';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FilterProductPipe } from 'src/app/product/pipes/filter-product.pipe';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  route = "Cart"
  ProductsInCart: any;
  subTotalPrice: number = 0;
  TAX = 20;
  TotalPrice: number = 0;
  totalProductPrice: number = 0;

  constructor(private _CartService: CartService) {
  }
  ngOnInit(): void {

    this.getProductFromCart()
    console.log(this.ProductsInCart);


    // this.subTotalPrice
    // this.calcSubTotalPrice()
    // this.TotalPrice= this.subTotalPrice + this.TAX

  }
  // calcSubTotalPrice() {

  //   return this.subTotalPrice
  // }
  // calcTotalPrice() {
  //   this.TotalPrice = this.subTotalPrice + this.TAX
  // }
  getProductFromCart() {
    this._CartService.getAllCartPrd().subscribe({
      next: (res) => {
        this.ProductsInCart = res;
        if (this.subTotalPrice , this.TotalPrice > 0) {
          // this.subTotalPrice = 0;
          this.ProductsInCart.forEach((product: any) => {
            this.subTotalPrice += product.price * product.quantityCart
            this.TotalPrice = this.subTotalPrice+this.TAX
          });
        }
        this.ProductsInCart.forEach((product: any) => {
          this.subTotalPrice += product.price * product.quantityCart
          this.TotalPrice = this.subTotalPrice+this.TAX

        });
        console.log("result done")
        localStorage.setItem('cartItemlength', this.ProductsInCart.length)
      }
    })
   

  }
  deletProductFromCart(product: any) {
    this._CartService.DeleteItemCart(product.id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("done deleted");
        this.subTotalPrice = 0;
        // this.calcSubTotalPrice()

      },
      error: (err) => {
        console.log(err);
        console.log("errrrrrrrrrrrrrrrreoroo");

        this.getProductFromCart();
      }
    });
    this.getProductFromCart();
  }

  increaseQuantitiy(id: number) {
    this._CartService.increaseQuantitiy(id).subscribe({

      next: (res) => {
        console.log(res);
        console.log("increase done");
        this.getProductFromCart();
        this.subTotalPrice = 0;
        // this.calcSubTotalPrice()
      },
      error: (err) => {
        console.log(err);
        console.log("error");
      }
    })

  }
  decreaseQuantitiy(id:number){
    this._CartService.decreaseQuantitiy(id).subscribe({

      next: (res) => {
        console.log(res);
        console.log("decrease done");
        this.getProductFromCart();
        this.subTotalPrice = 0;
        // this.calcSubTotalPrice()
      },
      error: (err) => {
        console.log(err);
        console.log("error");
      }
    })


  }

  // decreaseQuantity(product: any) {
  //   // this._CartService.decreaseQuantity(product)
  //   // this.calcSubTotalPrice()
  //   this.calcTotalPrice()
  // }

  // getTotalPrice(){

  //     this.ProductsInCart.forEach((product) => {
  //       totalPrice += product.totalPrice;
  //     });
  //     return totalPrice;
  //   } 

  // gettotalproductPrice(quantity:number,price:number){
  // }
 // getProductFromCart() {
    //   this._CartService.getAllCartPrd().subscribe({
    //     next: (res) => {
    //       this.ProductsInCart = res;
    //       this.subTotalPrice = 0;
    //       this.ProductsInCart.forEach((product: any) => {
    //         this.subTotalPrice += product.price * product.quantityCart
    //       });
    //       console.log(this.ProductsInCart)
    //       console.log("result done")
    //       localStorage.setItem('cartItemlength', this.ProductsInCart.length)
    //     }
    //   });
    // }

}
