import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';

import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule.forRoot(),
    CarouselModule.forRoot(),
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxImageZoomModule,
    FormsModule,
    // ReactiveFormsModule,
    GoogleMapsModule,
    // SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
