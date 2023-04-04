import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AllordersComponent } from './component/Allorders/Allorders.component';


@NgModule({
  declarations: [
    AllordersComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,

  ]
})
export class OrderModule { }
