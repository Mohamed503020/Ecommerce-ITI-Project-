import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductsComponent } from './components/products/products.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    ProductlistComponent,
    ProductsComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
    CarouselModule,
    NgxImageZoomModule
  ]
})
export class ProductModule { }
