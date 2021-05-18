import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs'


 @Injectable({
  providedIn: 'root'
})

export class DropdownService {

  constructor(private httpclient: HttpClient) { }

  state(){
    return [
      {
        no: 1,
        name: "Single Licensed NRT"
      },
      {
        no: 2,
        name: "Zyban"
      }
    ]
  }

  city(){
    return [
      {
        "id":1,
        no:1,
        name: "NRT Formulation Inhalator 01 "
      },
      {
        "id":2,
        no:1,
        name: "NRT Formulation Chewing Gum 0"
      },
      {
      
        "id":3,
        no: 1,
        name: "NRT Formulation Lozenge 0"
      },
      {
        "id":4,
         no: 1,
        name: "NRT Formulation Lozenge 0"
      },
      {
      
        "id":5,
        no: 1,
        name: "NRT NicAssist Chewing Gum Minty Fresh 30"
      },
      {
      
        "id":6,
        no: 1,
        name: "NRT NicAssist Inhalator 20"
      },
      {
        "id":7,
        no: 1,
        name: "NRT Formulation Lozenge 0"
      },
      {
        "id":1,
        no: 2,
        name: "Zyban testing 123"
      },
      {
        "id":2,
        no: 2,
        name: "Zyban new"
      }
    ]
  }
}
