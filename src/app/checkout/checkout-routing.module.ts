import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  // { path: "ordertrack", component: OrderComponent },
  { path: "", component: CheckoutComponent },
  { path: "trackOrder", component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {

 }
