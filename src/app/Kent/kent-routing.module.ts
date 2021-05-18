import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import {KentComponent} from './kent.component'


const routes: Routes =  [
  {
    path:'',
    component: ParentComponent,
    children : [
      {
        path : '', component : KentComponent
      },
    ]
},
        ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KentRoutingModule { }
