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


interface Locality {
  name: string;
  sound: string;
}

interface InRef {
  name: string;
  sound: string;
}



@Component({
  selector: 'app-refferal',
  templateUrl: './refferal.component.html',
  styleUrls: ['./refferal.component.css']
})
export class RefferalComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  selected = 'Referral';

  typeofreferral: string[] = [
    'Acute', 'Dental', 'Event', 'Community Group', 'GP', 'Host Site', 'KCA', 'KCC',
      ];

      service: string[] = [
        'Been Before', 'CGL Project', 'Council', 'Amicus Horizon',
          ];
          LocalityControl = new FormControl('', Validators.required);
          Locality: Locality[] = [
            {name: 'Locality1', sound: 'Locality1'},
            {name: 'Locality2', sound: 'Locality2'},

          ];

          InRefControl = new FormControl('', Validators.required);
          InRef: InRef[] = [
            {name: 'OYSF', sound: 'OYSF'},
            {name: 'OYLS', sound: 'OYLS'},
            {name: 'OYWL', sound: 'OYWL'},

          ];


  ngOnInit() {
  }

}
