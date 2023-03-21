import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from '../cart/components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
    NotFoundComponent,
    SubHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    MatSelectModule
  ],
  exports:[
     HeaderComponent,
    FooterComponent,
    SubHeaderComponent
  ]
})
export class SharedModule { }
