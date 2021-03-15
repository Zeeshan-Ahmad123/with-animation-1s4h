import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import { AdministrationComponent } from './components/administration/administration.component';



const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {path: '', component: AdministrationComponent},
    ]
  },


];


@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
