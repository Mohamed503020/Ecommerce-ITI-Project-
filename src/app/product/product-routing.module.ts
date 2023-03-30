import { SearchProductsComponent } from './components/search-products/search-products.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductcategoryComponent } from './components/productcategory/productcategory.component';

const routes: Routes = [
  {path:"",component:ProductlistComponent},
  {path:"productlist",component:ProductlistComponent},
  {path:"search/:name",component:SearchProductsComponent},
  {path:"productcategory/:cat", component:ProductcategoryComponent},
  {path:":id",component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
