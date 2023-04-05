import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartProduct } from '../../models/cartProduct';
import { FormServiceService } from '../../service/formService.service';

@Component({
  selector: 'app-done-order',
  templateUrl: './done-order.component.html',
  styleUrls: ['./done-order.component.css'],
})
export class DoneOrderComponent implements OnInit, OnChanges {
  cartProduct: CartProduct[] = [];
  ProductsCartPrice: any[] = [];
  totalPriceCart: number = 0;
  totalPriceCartDiscount: number = 0;
  totalPriceAfterDiscount: number = 0;
  now = new Date();
  twoDaysAfter: any;
  adress: any;
  @Input() shoppingAddreiss!: string;

  constructor(private formService: FormServiceService) {}

  ngOnChanges() {
    // this.adress=this.shoppingAddreiss
    // console.log(this.adress);

  }

  ngOnInit() {
    this.getCartProduct();
    console.log(this.shoppingAddreiss);
    this.adress=localStorage.getItem('shoppingAdress');
  }
  // this.formService.mainForm.value.shaping_address

  getCartProduct() {
    this.formService.cartProduct().subscribe({
      next: (res) => {
        // console.log(res);
        this.cartProduct = res;
        this.cartProduct.forEach((res) => {
          this.totalPriceCart += +res.price * +res.quantityCart;
          this.totalPriceCartDiscount += res.discount * +res.quantityCart;
          this.totalPriceAfterDiscount =
            this.totalPriceCart - this.totalPriceCartDiscount;
          console.log(this.totalPriceCart);
          this.twoDaysAfter = new Date(
            this.now.setDate(this.now.getDate()+2)
          );
          console.log(this.twoDaysAfter);
        });
      },
    });
  }


  // getCartProduct() {
  //   this.formService.cartProduct().subscribe({
  //     next: (res) => {
  //       // console.log(res);
  //       this.cartProduct = res;
  //       this.cartProduct.forEach((res) => {
  //         this.totalPriceCart += +res.price * +res.quantityCart;
  //         console.log(this.totalPriceCart);
  //       });
  //     },
  //   });
  // }
}
