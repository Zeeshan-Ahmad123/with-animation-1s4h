import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {FormBuilder, FormGroup} from '@angular/forms';

interface ConTyp1 {
  name: string;
  Id:Number;
}
interface ConTyp2 {
  name: string;
  Id:Number;
} 
@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']

})

export class UserAccessComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private _formBuilder: FormBuilder) { }
  ConTyp2Control = new FormControl('', Validators.required);
  ConTyp2: ConTyp2[] = [
    {Id:1, name: '!4 Road Sp'},
    {Id:2, name: 'A E Hobbs Pharmacy'},
    {Id:3, name: 'Ackers Chemists (Swanscombe)'},
    {Id:4, name: 'Adsa Pharmacy (Gravesend)'},
    {Id:5, name: 'Advisor'},

  ];


}
