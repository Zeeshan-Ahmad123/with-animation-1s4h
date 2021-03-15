import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {FormBuilder, FormGroup} from '@angular/forms';

interface ConTyp1 {
  name: string;
  sound: string;
}

interface ConTyp2 {
  name: string;
  sound: string;
}

interface ConTyp3 {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-smoking-status',
  templateUrl: './smoking-status.component.html',
  styleUrls: ['./smoking-status.component.css']
})
export class SmokingStatusComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }


  states: string[] = [
    'Home', 'Mobile', 'Work', 'Email', 'Other',
      ];
      ConTyp1Control = new FormControl('', Validators.required);
      ConTyp1: ConTyp1[] = [
        {name: 'Smoker', sound: 'OYSF'},
        {name: 'Ex_Smoker', sound: 'OYLS'},

      ];

      ConTyp2Control = new FormControl('', Validators.required);
      ConTyp2: ConTyp2[] = [
        {name: '<4 Weeks', sound: 'Home'},
        {name: '>4 Weeks', sound: 'Mobile'},

      ];

      ConTyp3Control = new FormControl('', Validators.required);
      ConTyp3: ConTyp3[] = [
        {name: 'YES', sound: 'Home'},
        {name: 'NO', sound: 'Mobile'},

      ];

  ngOnInit() {
  }

}
