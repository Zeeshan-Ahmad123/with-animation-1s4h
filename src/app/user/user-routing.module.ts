import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import { UserAccessComponent } from './user-access/user-access.component';

const routes: Routes = [
  {
    path:'',
    component: ParentComponent,
    children : [
      {
        path : '', component :UserAccessComponent
      },
    ]
},
        ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
