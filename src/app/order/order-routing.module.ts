import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllordersComponent } from './component/Allorders/Allorders.component';
import { OrderDetailsComponent } from './component/orderDetails/orderDetails.component';



const routes: Routes = [
  {path:'',component:AllordersComponent},
  {path:':id',component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class OrderRoutingModule { }
