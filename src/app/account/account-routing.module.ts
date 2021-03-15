import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ParentComponent } from '../layout/components/parent/parent.component';

// const routes: Routes = [
//  // {path:'account', component: LoginComponent},
//   // {path:'login', component: LoginComponent},
// ];
// const routes: Routes = [
//   {
//     path: '',
//     component: ParentComponent,
//     children: [
//       {path: 'account', component: LoginComponent},
//       { path: 'index', component: LoginComponent },
//     ]
//   },


// ];
const routes: Routes = [
  {path:'login', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }



