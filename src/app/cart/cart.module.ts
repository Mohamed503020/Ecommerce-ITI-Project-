import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
   HotToastModule
  ]
})
export class CartModule { }
