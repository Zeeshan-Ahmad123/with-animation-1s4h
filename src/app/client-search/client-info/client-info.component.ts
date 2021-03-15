import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {FormBuilder, FormGroup} from '@angular/forms';


interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {



     //for title
     animalControl = new FormControl('', Validators.required);
     selectFormControl = new FormControl('', Validators.required);
     animals: Animal[] = [
       {name: 'Mr', sound: 'Mr!'},
       {name: 'Mrs', sound: 'Mrs!'},
       {name: 'Dr', sound: 'Dr'},
       {name: 'Miss', sound: 'Miss'},
     ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';


}

}
