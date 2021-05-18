import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicRoutingModule } from './clinic-routing.module';
import { ClinicInfoComponent } from './clinic-info/clinic-info.component';
import{LayoutModule} from  '../layout/layout.module';
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatTableModule} from '@angular/material/table';
import{MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import{MatChipsModule} from '@angular/material/chips'
import{MatExpansionModule} from '@angular/material/expansion'
import{MatIconModule} from '@angular/material/icon'
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import {ScrollingModule} from '@angular/cdk/scrolling';
import{MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ClinicInfoComponent],
  imports: [
    CommonModule,
    ClinicRoutingModule,
    LayoutModule,
    MatTableModule,
    MatButtonModule,
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
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatAutocompleteModule,
    ScrollingModule,
    MatTabsModule,
    MatToolbarModule,










  ]
})
export class ClinicModule { }
