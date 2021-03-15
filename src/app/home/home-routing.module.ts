import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      { path: 'ClientSearch', component: DashboardComponent },
      // { path: 'index', component: DashboardComponent },
      { path: '', component: DashboardComponent }
      // {path : 'changepassword', component : ChangePasswordComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
