import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { MyOrderSidebarComponent } from './components/myOrderSidebar/myOrderSidebar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DoneOrderComponent } from './components/done-order/done-order.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    CheckoutComponent,
    AddressComponent,
    MyOrderSidebarComponent,
    PaymentComponent,
    DoneOrderComponent
    
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule
    
  ]
})
export class CheckoutModule { }
