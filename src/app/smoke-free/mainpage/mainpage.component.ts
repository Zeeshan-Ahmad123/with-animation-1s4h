import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

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
  }

}
