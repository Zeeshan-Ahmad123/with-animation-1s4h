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

@Component({
  selector: 'app-clinic-info',
  templateUrl: './clinic-info.component.html',
  styleUrls: ['./clinic-info.component.css']
})


export class ClinicInfoComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  ConTyp1Control = new FormControl('', Validators.required);
  ConTyp1: ConTyp1[] = [
    {name: 'Smoker', sound: 'OYSF'},
    {name: 'Ex_Smoker', sound: 'OYLS'},


  ];

  Smoker: boolean=false;
  toggledisplay(){

    this.Smoker=!this.Smoker;
  }

  ConTyp2Control = new FormControl('', Validators.required);
  ConTyp2: ConTyp2[] = [
    {name: 'Daily', sound: 'OYSF'},
    {name: 'Weekly', sound: 'OYLS'},
    {name: 'Fortnightly', sound: 'OYLS'},
    {name: 'Monthly', sound: 'OYLS'},
    {name: 'Yearly', sound: 'OYLS'},

  ];
  toppings = new FormControl();

  toppingList: string[] = ['OY Smoke Free', 'OY lifestyle ', 'OY Weight loss ', 'OY health CHecks/MOT ', 'One YOu Maidstone '];



  ngOnInit() {
  }

}
