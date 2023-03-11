import { ProductlistComponent } from './components/productlist/productlist.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

const routes: Routes = [
  {path:"",component:ProductlistComponent},
  {path:"productlist",component:ProductlistComponent},
  {path:":id",component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
