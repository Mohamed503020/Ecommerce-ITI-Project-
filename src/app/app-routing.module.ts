import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"/main",pathMatch:"full"},
  {path:"main",component:MainlayoutComponent,children:[
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {
      path: "products", 
      loadChildren: () => import("../app/product/product.module").then(m => m.ProductModule)
    }
  ]},
    {
      path: 'auth', 
      loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
