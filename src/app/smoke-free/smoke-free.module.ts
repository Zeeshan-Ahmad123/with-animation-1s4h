import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SmokeFreeRoutingModule } from './smoke-free-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ConsentComponent } from './consent/consent.component';
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
import { SmokingStatusComponent } from './smoking-status/smoking-status.component';
import { SignpostedComponent } from './signposted/signposted.component';
import{MatChipsModule} from '@angular/material/chips'
import{MatExpansionModule} from '@angular/material/expansion'
import{MatIconModule} from '@angular/material/icon'
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import { AuditCComponent } from './audit-c/audit-c.component'
import {ScrollingModule} from '@angular/cdk/scrolling';
import{MatTabsModule} from '@angular/material/tabs'

@NgModule({
  declarations: [MainpageComponent, ConsentComponent, SmokingStatusComponent, SignpostedComponent, AuditCComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    SmokeFreeRoutingModule,
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
    MatTabsModule

  ]
})
export class SmokeFreeModule { }
