import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
]; // sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }