import { Component, OnInit } from '@angular/core';
import {GetLookupService} from 'src/app/shared/services/administrationLookup.service'
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {

  lookupList: any;
  userList: any;

  constructor(
    private GetLookupService: GetLookupService,
    private router: Router

  )
  {
    this.lookupList = [];
    this.userList = [];
  }


  BtnAClick(){
    this.getList();
    $('#TblA_Container').show();
    $('#TblB_Container').hide();
  }

  BtnBClick(){
    this.getUserList();
    $('#TblA_Container').hide();
    $('#TblB_Container').show();
  }

  getList() {
    debugger;
    this.GetLookupService.getList().subscribe
      (
        res => {
          console.log(res);
          this.lookupList = res;
        },
        err => {

        }
      )
  }

// Get User List
  getUserList() {
    debugger;
    this.GetLookupService.getUserList().subscribe
      (
        res => {
          console.log(res);
          this.lookupList = res;
        },
        err => {

        }
      )
  }

  ngOnInit() {
    $(document).ready(function(){
      $('#TblA_Container').hide();
      $('#TblB_Container').hide();
    })
  }



}
