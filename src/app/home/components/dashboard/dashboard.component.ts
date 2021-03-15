import { Component, OnInit } from '@angular/core';
import { ClientSearchService } from 'src/app/shared/services/searchClient.service'
import * as $ from 'jquery';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  name2: string;
  active: string;
}

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const Actives: string[] = [
  'Yes', 'No'
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  

  displayedColumns: string[] = ['id', 'name', 'name2', 'progress', 'active' ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  constructor(
   private ClientSearchService: ClientSearchService,
    private router: Router

  )
  {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  SearchClient(){
    $('#clientsearchResult').show();
    $('#CreateNewButton').show();

  }





}


function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      const name2 = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      const active = Actives[Math.round(Math.random() * (Actives.length - 1))];

  return {
    id: id.toString(),
    name: name,
    name2: name2,
    active: active,
    progress: Math.round(Math.random() * 100).toString(),

  };
}
