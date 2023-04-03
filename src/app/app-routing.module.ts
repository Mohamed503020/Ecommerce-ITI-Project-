import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { OrderComponent } from './checkout/components/order/order.component';

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
      loadChildren: () => import("../app/cart/cart.module").then(m => m.CartModule),canActivate:[AuthGuard]
    },
    {
      path: "wishlist",
      loadChildren: () => import("../app/wishlist-list/wishlist-list.module").then(m => m.WishlistListModule),canActivate:[AuthGuard]
    },
    {
      path: "checkout",
      loadChildren: () => import("../app/checkout/checkout.module").then(m => m.CheckoutModule),canActivate:[AuthGuard]
    },
    {
      path: "user",
      loadChildren: () => import("../app/user/user.module").then(m => m.UserModule),canActivate:[AuthGuard]
    },
    {
      path: "allOrders",
      loadChildren: () => import("../app/order/order.module").then(m => m.OrderModule),canActivate:[AuthGuard]
    },
    {path:"contact",component:ContactComponent,canActivate:[AuthGuard]},
    {path:"about",component:AboutComponent},
     {path:"location",component:LocationComponent},
     { path: "ordertrack", component: OrderComponent },

  ]}

  , {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
