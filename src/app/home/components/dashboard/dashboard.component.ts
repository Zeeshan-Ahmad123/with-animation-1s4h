import { Component, OnInit } from '@angular/core';
import { ClientSearchService } from 'src/app/shared/services/searchClient.service'
import * as $ from 'jquery';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  clientList: any=[];
  txtForename: string;
  txtSurname: string;
  Forename:string;
  totalrecords:string;
  ClientId:number;
  page: number=1;

  constructor(
   private ClientSearchService: ClientSearchService,
    private router: Router

  )
  {
    this.clientList = [];
    this.txtForename = '';
    this.txtSurname = '';
  }



  ngOnInit() {
    debugger;
    // this.getList();
  }
  ngAfterViewInit() {

  }
  getList() {}

  SearchClient() {

    // this.getList(this.txtForename, this.txtSurname);
  this.ClientSearchService.getList(this.txtForename, this.txtSurname).subscribe
      (
        res => {
          debugger;
          console.log(res);
          this.clientList = res;
          // this.router.navigateByUrl("/home/");
        },
        err => {

        }
      )
  }
  Search(){
     this.clientList=this.clientList.filter(sol=>{
        return sol.Forename.toLocaleLowerCase().match(this.txtForename.toLocaleLowerCase())
      })

  }
  key:string ='id';
  reverse : boolean =false;
  sort(key){

    this.key= key ;
    this.reverse = !this.reverse;


  }

}







