import { Component, OnInit } from '@angular/core';
import { ClientSearchService } from 'src/app/shared/services/client-search.service';
import { NumberSymbol } from '@angular/common';
import { Router } from '@angular/router';
//New Added
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

   //for steeper
   isLinear = false;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   ThirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.ThirdFormGroup = this._formBuilder.group({
      ThirdCtrl: ['', Validators.required]
    });
  }

}
