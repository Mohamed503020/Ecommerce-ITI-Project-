import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AllOrdersComponent } from 'dashboard-ecommerce--ItI-Project-/src/app/order/components/all-orders/all-orders.component';


@NgModule({
  declarations: [
    AllOrdersComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    
  ]
})
export class OrderModule { }
