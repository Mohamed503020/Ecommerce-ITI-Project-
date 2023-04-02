import { HotToastService } from '@ngneat/hot-toast';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FilterProductPipe } from 'src/app/product/pipes/filter-product.pipe';
import { filter } from 'rxjs';
=======

import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
>>>>>>> beshoy
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
<<<<<<< HEAD
export class CartComponent implements OnInit {
  route = "Cart"
=======
export class CartComponent implements OnInit, AfterContentChecked {
  route = 'Cart';
>>>>>>> beshoy
  ProductsInCart: any;
  subTotalPrice: number = 0;
  TAX = 20;
  TotalPrice: number = 0;
<<<<<<< HEAD
  totalProductPrice: number = 0;

  constructor(private _CartService: CartService) {
=======
 empty: boolean = false;


  constructor(private _CartService: CartService) {}
  ngAfterContentChecked(): void {
    let cartLength = localStorage.getItem('cartItemlength');
    if (cartLength == '0') {
      this.empty = true;
      this.ProductsInCart = [];
    }
  }
  ngOnInit(): void {
    this.getProductFromCart();
    console.log(this.ProductsInCart);

    this.calcSubTotalPrice();
    this.TotalPrice = this.subTotalPrice + this.TAX;
  }
  calcSubTotalPrice() {
    // this.subTotalPrice=this._CartService.getTotalPrice()
  }
  calcTotalPrice() {
    this.TotalPrice = this.subTotalPrice + this.TAX;
  }
  getProductFromCart() {
    this._CartService.getAllCartPrd().subscribe({
      next: (res) => {
        this.ProductsInCart = res;
        console.log(this.ProductsInCart);
        console.log('result done');
        localStorage.setItem('cartItemlength', this.ProductsInCart.length);
      },
    });
  }
  deletProductFromCart(product: any) {
    this._CartService.DeleteItemCart(product.id).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product deleted Succefully ',
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(res);
        console.log('done deleted');
        this.getProductFromCart();
      },
      error: (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product deleted Succefully ',
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(err);
        console.log('errrrrrrrrrrrrrrrreoroo');
        this.getProductFromCart();
      },
    });
    let cartItemlength = parseInt(
      localStorage.getItem('cartItemlength') || '0'
    );
    if (cartItemlength > 0) {
      cartItemlength -= 1;
      localStorage.setItem('cartItemlength', cartItemlength.toString());
    }
    this.calcSubTotalPrice();
    this.calcTotalPrice();
>>>>>>> beshoy
  }
  ngOnInit(): void {

<<<<<<< HEAD
    this.getProductFromCart()
    // console.log(this.ProductsInCart);
    // this.subTotalPrice
    // this.calcSubTotalPrice()
    // this.TotalPrice= this.subTotalPrice + this.TAX

  }

    ///////////////////////////////////////////////////////
    getProductFromCart() {
      this._CartService.getAllCartPrd().subscribe({
        next: (res) => {
          this.ProductsInCart = res;
          this.subTotalPrice = 0;
          this.ProductsInCart.forEach((product: any) => {
            this.subTotalPrice += product.price * product.quantityCart;
          });
          this.TotalPrice = this.subTotalPrice + this.TAX;
          console.log("result done")
          localStorage.setItem('cartItemlength', this.ProductsInCart.length)
        }
      })
    }
    
    deletProductFromCart(product: any) {
      this._CartService.DeleteItemCart(product.id).subscribe({
        next: (res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product deleted Succefully ',
            showConfirmButton: false,
            timer: 2500
          })
          console.log(res);
          console.log("done deleted");
          this.getProductFromCart();
         
        },
        error: (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product deleted Succefully ',
            showConfirmButton: false,
            timer: 2500
          })
          console.log(err);
          console.log("errrrrrrrrrrrrrrrreoroo");
          this.getProductFromCart();
        }
      });
    }
  
    increaseQuantitiy(id: number) {
      this._CartService.increaseQuantitiy(id).subscribe({
        next: (res) => {
          console.log(res);
          console.log("increase done");
          this.getProductFromCart();
        },
        error: (err) => {
          console.log(err);
          console.log("error");
        }
      });
    }
  
    decreaseQuantitiy(id:number){
      this._CartService.decreaseQuantitiy(id).subscribe({
        next: (res) => {
          console.log(res);
          console.log("decrease done");
          this.getProductFromCart();
        },
        error: (err) => {
          console.log(err);
          console.log("error");
        }
      });
    }
  }
  


=======
  increaseQuantity(product: any) {
    // this._CartService.increaseQuantity(product)
    this.calcSubTotalPrice();
    this.calcTotalPrice();
  }

  decreaseQuantity(product: any) {
    // this._CartService.decreaseQuantity(product)
    this.calcSubTotalPrice();
    this.calcTotalPrice();
  }
}
>>>>>>> beshoy
