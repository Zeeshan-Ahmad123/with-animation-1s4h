import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KentRoutingModule } from './kent-routing.module';
import { KentComponent } from './kent.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {LayoutModule} from '../layout/layout.module';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import{MatButtonToggleModule} from '@angular/material/button-toggle'


@NgModule({
  declarations: [KentComponent],
  imports: [
    CommonModule,
    KentRoutingModule,
    MatExpansionModule,
    LayoutModule,
    MatTableModule,
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
    MatIconModule,
    MatToolbarModule,
    NgSelectModule,
    NgxMaterialTimepickerModule,
    MatButtonToggleModule 
    
    

  ]
})
export class KentModule { }
