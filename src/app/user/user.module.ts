import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class UserModule { }
