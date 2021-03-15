import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ParentComponent} from '../layout/components/parent/parent.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [

  {
  path:'',
  component: ParentComponent,
  children : [
    {
      path : '', component : CalenderComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
