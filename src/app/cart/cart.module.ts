import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
   SharedModule
  ]
})
export class CartModule { }
