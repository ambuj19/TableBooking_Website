import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{path:'aboutus', component:AboutusComponent},
{path:'gallery', component:GalleryComponent},
{path:'profile', component:ProfileComponent},
{path:'reservation',component:ReservationComponent},
{ path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
