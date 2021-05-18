import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgSelectModule } from '@ng-select/ng-select';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@NgModule({
  declarations: [
    AppComponent,
    
 
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgSelectModule,   
    NgxMaterialTimepickerModule
    



  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
