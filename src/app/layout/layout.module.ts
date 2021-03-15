import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';
import { ParentComponent } from './components/parent/parent.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [NavbarComponent, LeftmenuComponent, ParentComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ]
})
export class LayoutModule { }
