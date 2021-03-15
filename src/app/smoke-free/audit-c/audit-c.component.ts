import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-c',
  templateUrl: './audit-c.component.html',
  styleUrls: ['./audit-c.component.css']
})
export class AuditCComponent implements OnInit {
  firsts: string[] = ['Never', 'Monthly or Less', '2-4 Times Per MOnth', '2-3 Times per Week','4+ times per Week'];
  seconds: string[] = ['0-2', '3-4', '5-6', '7-9','10+'];

  thirds: string[] = ['Never', ' Less than monthly', 'Monthly', 'Weekly','Daily or almost daily'];
  forths: string[] = ['No', 'Yes,but not in the last year', 'Yes , during the last year'];

  constructor() { }

  ngOnInit() {
  }

}
