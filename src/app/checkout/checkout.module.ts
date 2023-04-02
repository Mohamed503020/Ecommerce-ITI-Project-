import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { MyOrderSidebarComponent } from './components/myOrderSidebar/myOrderSidebar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DoneOrderComponent } from './components/done-order/done-order.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from './../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  declarations: [
    AddressComponent,
    MyOrderSidebarComponent,
    PaymentComponent,
    DoneOrderComponent,
    CheckoutComponent,
    OrderComponent
    
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    SharedModule,
    MatFormFieldModule,

  ]
})
export class CheckoutModule { }
