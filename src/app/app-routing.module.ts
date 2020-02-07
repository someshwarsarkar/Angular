import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HomeComponent } from './home/home.component';

import { PhotosComponent } from './photos/photos.component';
import { AuthGuard } from './guards/auth-guard.service';




const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'albums', component:AlbumsComponent,children:[
    {path:':id', component:PhotosComponent}
  ]},
  {path:'userdetails', canActivate : [AuthGuard] , component:UserdetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
