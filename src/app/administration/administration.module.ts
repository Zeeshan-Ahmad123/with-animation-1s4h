import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { LayoutModule } from '../layout/layout.module';
import {MatButtonModule} from '@angular/material/button';
import { GetLookupService } from '../shared/services/administrationLookup.service';
import { ReferralComponent } from './referral/referral.component';
import { FaceToFaceComponent } from './face-to-face/face-to-face.component';

import {MatSelectModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PhoneComponent } from './phone/phone.component';
@NgModule({
  declarations: [AdministrationComponent, ReferralComponent, FaceToFaceComponent, PhoneComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AdministrationRoutingModule,
    LayoutModule,
    CommonModule,
    AdministrationRoutingModule,
    LayoutModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers : [GetLookupService]
})
export class AdministrationModule { }
