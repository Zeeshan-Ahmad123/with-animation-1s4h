import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientSearchService } from '../shared/services/searchClient.service';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,





  ],
  providers : [ClientSearchService]
})
export class HomeModule { }
