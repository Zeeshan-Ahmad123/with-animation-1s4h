import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  showSpinner=false;

  loadData()
  {
    this.showSpinner=true;
    setTimeout(() => {

      this.showSpinner=false;

    }, 5000);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
