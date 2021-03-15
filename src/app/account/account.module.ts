import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatProgressSpinnerModule

  ]
})
export class AccountModule { }




