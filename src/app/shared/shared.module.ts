import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from '../cart/components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
    NotFoundComponent,
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
