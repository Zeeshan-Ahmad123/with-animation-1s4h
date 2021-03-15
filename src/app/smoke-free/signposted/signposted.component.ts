import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-signposted',
  templateUrl: './signposted.component.html',
  styleUrls: ['./signposted.component.css']
})
export class SignpostedComponent implements OnInit {

  toppings = new FormControl();

  toppingList: string[] = ['Specialist Weight Managment Service', '4 Healthy Weight', 'GP', 'Clinical Nutrition and Dietettic Service ', 'Excercise Refferal Scheme ', 'Expert Patient Prograam'];

  constructor() { }

  ngOnInit() {
  }

}
