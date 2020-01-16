import { SinglePropertyComponent } from './single-property/single-property.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },                       // localhost:4200/home
  { path: 'admin/dashboard', component: AdminDashboardComponent},   // localhost:4200/admin/dashboard
  { path: 'login', component: SigninComponent},                     // localhost:4200/login
  {path: 'property/:id', component: SinglePropertyComponent},       // localhost:4200/property/1
  {path: '', redirectTo: 'home', pathMatch: 'full'},                // path vide (localhost:4200) redirection sur la page home
  {path: '**', redirectTo: 'home'}                                  // path non vide et non existant (localhost:4200/blablabla)
                                                                    // redirection sur la page home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
