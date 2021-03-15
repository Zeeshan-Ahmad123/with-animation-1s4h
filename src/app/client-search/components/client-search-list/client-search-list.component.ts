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

interface Animal {
  name: string;
  sound: string;
}



@Component({
  selector: 'app-client-search-list',
  templateUrl: './client-search-list.component.html',
  styleUrls: ['./client-search-list.component.css']
})
export class ClientSearchListComponent implements OnInit {


  //for steeper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ThirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}


  //for title
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Mr', sound: 'Mr!'},
    {name: 'Mrs', sound: 'Mrs!'},
    {name: 'Dr', sound: 'Dr'},
    {name: 'Miss', sound: 'Miss'},
  ];




  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';


}

NHSUnknown(){
  // $('#ContentPlaceHolder1_txtNHS1').prop('disabled', true);
}
}
