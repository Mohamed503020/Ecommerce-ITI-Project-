import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistListRoutingModule } from './wishlist-list-routing.module';
import { WishlistListComponent } from './components/wishlist-list/wishlist-list.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    WishlistListComponent
  ],
  imports: [
    CommonModule,
    WishlistListRoutingModule,
    SharedModule
  ]
})
export class WishlistListModule { }
