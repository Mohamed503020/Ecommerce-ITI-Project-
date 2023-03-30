import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart/services/cart.service';
import { FormServiceService } from '../../service/formService.service';

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
  ngOnInit() {
    this.getProductFromCart();
    console.log(this.totalPrice);
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
}
