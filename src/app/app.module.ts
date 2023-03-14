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
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { HotToastModule } from '@ngneat/hot-toast';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    HomeComponent,
    ContactComponent
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
    HotToastModule.forRoot(),
    // SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
