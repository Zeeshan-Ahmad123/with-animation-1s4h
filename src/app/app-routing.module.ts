import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'account',loadChildren : './account/account.module#AccountModule'},
  {path:'login',loadChildren : './account/account.module#AccountModule'},
  {path:'ClientSearch',loadChildren : './home/home.module#HomeModule' },
  {path:'', redirectTo : 'account/login', pathMatch:'full'},
  {path:'ClientOnePageEntry',loadChildren : './client-search/client-search.module#ClientSearchModule' },
  {path:'administration',loadChildren : './administration/administration.module#AdministrationModule' },
  {path:'smokefree',loadChildren:'./smoke-free/smoke-free.module#SmokeFreeModule'},
  {path:'appointment',loadChildren:'./appointment/appointment.module#AppointmentModule'},
  {path:'clinic',loadChildren:'./clinic/clinic.module#ClinicModule'},
  {path:'Kent',loadChildren:'./Kent/kent.module#KentModule'},

  {path:'user-access',loadChildren:'./user/user.module#UserModule'},



  {path:'**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
