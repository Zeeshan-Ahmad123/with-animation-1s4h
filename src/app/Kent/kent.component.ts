import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import{DropdownService} from '..//shared/services/dropdown.service'
import {FormBuilder, FormGroup} from '@angular/forms';
import 'aos/dist/aos.css';
import * as AOS from 'aos';
import { id } from 'date-fns/locale';
interface ConTyp1 {
  name: string;
  id: number;
}

interface ConTyp2 {
  name: string;
  sound: string;
}

interface ConTyp3 {
  name: string;
  id: number;
}
interface ConTyp4 {
  name: string;
  id: number;
}

interface ConTyp5 {
  name: string;
  id: number;
  no:number;
}

@Component({
  selector: 'app-kent',
  templateUrl: './kent.component.html',
  styleUrls: ['./kent.component.css']
})
export class KentComponent implements OnInit {

  selectedItems: any;

  events: Event[] = [];
showme:boolean=false;
date:boolean=false;
empselected:number;
recent:boolean=false
co:boolean=false;
ad:boolean=false;
product: FormGroup;
val:boolean=false;
advising:any;
method:boolean=false
survy:boolean=false
  constructor(private _formBuilder: FormBuilder,private auth: DropdownService) { }
  ngOnInit() {


    this.state = this.auth.state();
    AOS.init({
      offset: 200,
    delay: 100,
    duration: 1000,
    }); 
  }
  state:any=[];
city:any=[];

  onSelect(state:any){ 
    debugger
   this.ad=true;
   this.city = [];
     this.city = this.auth.city().filter(e=> e.no == state.value);
   
  }
  selectedPeople = []
  onSelct(devicevalue)
  {

    debugger;
    if(devicevalue.length>=1){
    for (let i = 0; i < devicevalue.length; i++) {

      if(devicevalue[i]==1)
      {
        this.val=!this.val;
      }}}
      else{
        this.val=!this.val;
      }

    }
    survey()
    {


      this.survy=!this.survy;

    }
  COtoken(value:any){
    if(value==1){

      this.co=true;
    }

    else{
  this.co=false;
    }

  }
  onOptionsSelected(value:any){

    if(value==2){

      this.recent=true;
    }

    else{
  this.recent=false;
    }

  }
toogle(){
  this.showme=!this.showme;
}
showdate(){
  this.date=!this.date
}
onSlect(){
  this.method=true;
}



  states: string[] = [
    'Home', 'Mobile', 'Work', 'Email', 'Other',
      ];
      ConTyp1Control = new FormControl('', Validators.required);
      ConTyp1: ConTyp1[] = [
        {name: 'Smoker', id: 1},
        {name: 'Ex_Smoker', id: 2},
     
      ];
     

 

      ConTyp2Control = new FormControl('', Validators.required);
      ConTyp2: ConTyp2[] = [
        {name: '<4 Weeks', sound: 'Home'},
        {name: '>4 Weeks', sound: 'Mobile'},

      ];

      ConTyp3Control = new FormControl('', Validators.required);
      ConTyp3: ConTyp3[] = [
        {name: 'YES', id: 1},
        {name: 'NO', id: 2},

      ];
      
      ConTyp4Control = new FormControl('', Validators.required);
      ConTyp4: ConTyp4[] = [
        {name: 'Not Quit ', id: 1},
        {name: 'Lost To Follow Up ', id: 2},

      ];
      ConTyp5Control = new FormControl('', Validators.required);
      ConTyp5: ConTyp4[] = [
        {name: 'Single Licensed NRT', id: 1},
        {name: 'Combination Licensed NRT ', id: 2},
        {name: 'Zyban ', id: 3},
        {name: 'Champix ', id: 4},
        {name: 'Licensed NRT & Zyban And/or Champix ', id: 5},
        {name: 'Licensed Medication & Unilicenced NRT Concurrently ', id: 6},
        {name: 'Licensed Medication & Unilicenced NRT Consecutively ', id: 7},
        {name: 'Unilicenced NRT ', id: 8},
        {name: 'Support only', id: 9},

      ];
      ConTyp6Control = new FormControl('', Validators.required);
      ConTyp6: ConTyp4[] = [
        {name: 'Specialist Weight Managmennt Service', id: 1},
        {name: '4 Healthy Weight ', id: 2},
        {name: 'Gp', id: 3},
        {name: 'Clinical Nutrition And Dietectic Service ', id: 4},
        {name: 'Exercise Refferal Scheme  ', id: 5},
        {name: 'Expert Patient Programe ', id: 6},
   

      ];
      ConTyp7Control = new FormControl('', Validators.required);
      ConTyp7: ConTyp4[] = [
        {name: 'Not Quit ', id: 1},
        {name: 'Lost To Follow Up ', id: 2},

      ];
      ConTyp8Control = new FormControl('', Validators.required);
      ConTyp8: ConTyp4[] = [
        {name: 'NO internet Access ', id: 1},
        {name: 'Test Options', id: 2},
        {name: 'Test 2021 ', id: 3},

      ];

}
