import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import { ClinicInfoComponent } from '../clinic/clinic-info/clinic-info.component';

const routes: Routes =  [
  {
    path:'',
    component: ParentComponent,
    children : [
      {
        path : '', component : ClinicInfoComponent
      },
    ]
},
        ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicRoutingModule { }
