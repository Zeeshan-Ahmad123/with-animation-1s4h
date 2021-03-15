import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { CalenderComponent } from './calender/calender.component';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import{MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    LayoutModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    FlatpickrModule,
    CalendarModule,
    NgbModalModule,
    MatToolbarModule,


  ],
})

export class AppointmentModule { }
