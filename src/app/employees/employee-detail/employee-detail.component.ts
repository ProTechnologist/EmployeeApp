import { Component, OnInit, Input } from '@angular/core';

import { Employee } from './../../shared/employee'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input('Employee') currentEmployee: Employee;
  @Input() action: string;

  constructor() { }

  ngOnInit() {
  }

}
