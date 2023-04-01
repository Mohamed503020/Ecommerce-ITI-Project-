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
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { ProductsOfCategoryComponent } from './components/products-of-category/products-of-category.component';
import { ProductcategoryComponent } from './components/productcategory/productcategory.component';


@NgModule({
  declarations: [
    ProductlistComponent,
    ProductsComponent,
    ProductdetailsComponent,
    FilterProductPipe,
    SearchProductsComponent,
    ProductsOfCategoryComponent,
    ProductcategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
    CarouselModule,
    NgxImageZoomModule,
    FormsModule,
    SharedModule

  ]
})
export class ProductModule { }
