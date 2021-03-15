import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import { ClientSearchListComponent } from './components/client-search-list/client-search-list.component';


const routes: Routes = [
  {
          path:'', 
          component: ParentComponent, 
          children : [
            {
              path : '', component : ClientSearchListComponent
            },
          ]
      },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSearchRoutingModule { }
