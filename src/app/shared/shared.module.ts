import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
     HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
