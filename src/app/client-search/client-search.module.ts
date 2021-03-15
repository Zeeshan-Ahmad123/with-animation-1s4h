import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSearchListComponent } from './components/client-search-list/client-search-list.component';
import { ClientSearchRoutingModule } from './client-search-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ClientSearchService } from '../shared/services/client-search.service';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { RefferalComponent } from './refferal/refferal.component';
import { AddressComponent } from './address/address.component';
import { ConsentComponent } from './consent/consent.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HealthInfoComponent } from './health-info/health-info.component'; // for datepicker
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [ClientSearchListComponent, ContactComponent, RefferalComponent, AddressComponent, ConsentComponent, ClientInfoComponent, GeneralInfoComponent, HealthInfoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ClientSearchRoutingModule,
    LayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule


  ],
  providers : [ClientSearchService]
})
export class ClientSearchModule { }
