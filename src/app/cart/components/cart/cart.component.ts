import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterContentChecked {
  route = 'Cart';
  ProductsInCart: any;
  subTotalPrice: number = 0;
  TAX = 20;
  TotalPrice: number = 0;
 empty: boolean = false;
 totalProductPrice: number = 0;
 

  constructor(private _CartService: CartService,) {}
  ngAfterContentChecked(): void {
    let cartLength = localStorage.getItem('cartItemlength');
    if (cartLength == '0') {
      this.empty = true;
      this.ProductsInCart = [];
    }
  }
  ngOnInit(): void {
    this.getProductFromCart();
  
  }
 
  calcTotalPrice() {
    this.TotalPrice = this.subTotalPrice + this.TAX;
  }

  getProductFromCart() {
    this._CartService.getAllCartPrd().subscribe({
      next: (res) => {
        this.ProductsInCart = res;
        this.subTotalPrice = 0;
        this._CartService.cartItems.next(res)
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
    this.calcTotalPrice();
  }
  increaseQuantitiy(id: number) {
    this._CartService.increaseQuantitiy(id).subscribe({
      next: (res) => {
        console.log("increase done");
        this.getProductFromCart();
      },
      error: (err) => {
        console.log("error");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'quantity not available!',
        })
      }
    });
  }

  decreaseQuantitiy(id: number) {
    this._CartService.decreaseQuantitiy(id).subscribe({
      next: (res) => {
        console.log("decrease done");
        this.getProductFromCart();
      },
      error: (err) => {
        console.log("error");
      }
    });
  }
}
