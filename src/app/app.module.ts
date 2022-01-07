import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingService } from './booking.service';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    GalleryComponent,
    ProfileComponent,
    ReservationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [BookingService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
