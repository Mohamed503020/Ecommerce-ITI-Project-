import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart/services/cart.service';
import { FormServiceService } from '../../service/formService.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  stepper: any;
  stepTwo: any;
  stepOne: any;
  ProductsInCart: any[] = [];
  totalPrice: number = 0;
  shoppingAdress: string = '';
  ngOnInit() {
    this.getProductFromCart();
    console.log(this.totalPrice);
    this.shoppingAdress = this.formService.mainForm.value.shaping_address;
  }
  isLinear = false;
  myForm: Array<string>;

  constructor(
    public formService: FormServiceService,
    private fb: FormBuilder,
    private _CartService: CartService
  ) {
    this.myForm = this.formService.mainForm.value;
  }

  keys(): Array<string> {
    return Object.keys(this.myForm);
  }

  getProductFromCart() {
    this._CartService.getAllCartPrd().subscribe({
      next: (res) => {
        this.ProductsInCart = res;
        console.log(this.ProductsInCart);
        console.log('result done');
        // localStorage.setItem('cartItemlength', this.ProductsInCart.length);
        this.ProductsInCart.forEach((res) => {
          this.totalPrice += +res.price * +res.quantityCart;
          console.log(this.totalPrice);
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createUserOrder() {
    // this.formService.amount=this.totalPrice;
    this.formService.crearteOrder(this.formService.mainForm.value).subscribe({
      next: (res) => {
        console.log(res);
        // localStorage.removeItem('shoppingAdress')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Order Success ',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!Make sure that the information you entered is correct',
        })
      },
    });
  }
}
