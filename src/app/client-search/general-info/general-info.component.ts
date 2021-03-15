import { Component, OnInit } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
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

interface ConTyp4 {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  states: string[] = [
    'Home', 'Mobile', 'Work', 'Email', 'Other',
      ];
      ConTyp1Control = new FormControl('', Validators.required);
      ConTyp1: ConTyp1[] = [
        {name: 'White British', sound: 'OYSF'},
        {name: 'White Irish', sound: 'OYLS'},
        {name: 'Any Other White Backgroud', sound: 'OYWL'},

      ];

      ConTyp2Control = new FormControl('', Validators.required);
      ConTyp2: ConTyp2[] = [
        {name: 'Full Time Student', sound: 'Home'},
        {name: 'Never Worked or Unempoyed over one year', sound: 'Mobile'},
        {name: 'Retired', sound: 'Email'},
        {name: 'Sick/Disable and Unable to Return To Work', sound: 'Other'},

      ];

      ConTyp3Control = new FormControl('', Validators.required);
      ConTyp3: ConTyp3[] = [
        {name: 'Straight', sound: ''},
        {name: 'Gay Man', sound: ''},
        {name: 'Gay Women', sound: ''},

      ];
      ConTyp4Control = new FormControl('', Validators.required);
      ConTyp4: ConTyp4[] = [
        {name: 'Yes', sound: ''},
        {name: 'No', sound: ''},

      ];



  ngOnInit() {
  }

}
