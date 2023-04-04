import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';

import { AllordersComponent } from './component/Allorders/Allorders.component';
import { OrderDetailsComponent } from './component/orderDetails/orderDetails.component';


@NgModule({
  declarations: [
    AllordersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    
  ]
})
export class OrderModule { }
