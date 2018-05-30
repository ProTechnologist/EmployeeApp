import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Employee } from './../shared/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  allowAddNewEmployee: boolean = false;
  new_employee: Employee;
  selectedEmployee: Employee = null;
  selectedAction: string = '';

  employees: Employee[] = [
    new Employee('umer', 35, false),
    new Employee('sheraz', 27, false),
    new Employee('iltaf', 33, true)
  ];

  constructor() { }

  ngOnInit() {
    this.new_employee = new Employee('', 0, true);
  }

  showAddNewForm() {
    this.allowAddNewEmployee = !this.allowAddNewEmployee;
    console.log('allowAddNewEmployee:' + this.allowAddNewEmployee);
  }

  onAddNewEmployee() {
    this.employees.push(this.new_employee);
    this.allowAddNewEmployee = !this.allowAddNewEmployee;
  }

  onCancel() {
    this.allowAddNewEmployee = !this.allowAddNewEmployee;
  }

  // employee info events
  employeeActionHandler(employeeData: {employee: Employee, action: string}) {
    this.selectedEmployee = employeeData.employee;
    this.selectedAction = employeeData.action;
  }

}
