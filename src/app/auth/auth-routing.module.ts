import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent},
  {path:"resetpassword",component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
