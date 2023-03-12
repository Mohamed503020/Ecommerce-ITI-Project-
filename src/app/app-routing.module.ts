import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {path:"",redirectTo:"/main/products",pathMatch:"full"},
  {path:"main",component:MainlayoutComponent,children:[
    {path:"",redirectTo:"products",pathMatch:"full"},
    {
      path: "products",
      loadChildren: () => import("../app/product/product.module").then(m => m.ProductModule)
    },

    {
      path: "cart",
      loadChildren: () => import("../app/cart/cart.module").then(m => m.CartModule)
    },
    {
      path: "wishlist",
      loadChildren: () => import("../app/wishlist-list/wishlist-list.module").then(m => m.WishlistListModule)
    },
    {
      path: "checkout",
      loadChildren: () => import("../app/checkout/checkout.module").then(m => m.CheckoutModule)
    },
    {
      path: "user",
      loadChildren: () => import("../app/user/user.module").then(m => m.UserModule)
    },
  ]}

,{
  path:"**",component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
