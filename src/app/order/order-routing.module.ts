import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from 'dashboard-ecommerce--ItI-Project-/src/app/order/components/all-orders/all-orders.component';


const routes: Routes = [
  {path:'',component:AllOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
