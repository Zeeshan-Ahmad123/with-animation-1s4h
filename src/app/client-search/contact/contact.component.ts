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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  states: string[] = [
    'Home', 'Mobile', 'Work', 'Email', 'Other',
      ];
      ConTyp1Control = new FormControl('', Validators.required);
      ConTyp1: ConTyp1[] = [
        {name: 'Home', sound: 'OYSF'},
        {name: 'Mobile', sound: 'OYLS'},
        {name: 'Email', sound: 'OYWL'},

      ];

      ConTyp2Control = new FormControl('', Validators.required);
      ConTyp2: ConTyp2[] = [
        {name: 'Home', sound: 'Home'},
        {name: 'Mobile', sound: 'Mobile'},
        {name: 'Email', sound: 'Email'},
        {name: 'Other', sound: 'Other'},

      ];

      ConTyp3Control = new FormControl('', Validators.required);
      ConTyp3: ConTyp3[] = [
        {name: 'Home', sound: 'Home'},
        {name: 'Mobile', sound: 'Mobile'},
        {name: 'Email', sound: 'Email'},

      ];

  ngOnInit() {
  }

}
