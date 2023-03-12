import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistListRoutingModule } from './wishlist-list-routing.module';
import { WishlistListComponent } from './components/wishlist-list/wishlist-list.component';


@NgModule({
  declarations: [
    WishlistListComponent
  ],
  imports: [
    CommonModule,
    WishlistListRoutingModule
  ]
})
export class WishlistListModule { }
