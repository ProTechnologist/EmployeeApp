import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from './../../shared/employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  @Input('Employee') thisEmployee: Employee;
  @Input() isSelected: boolean;

  @Output() onEmployeeAction = new EventEmitter<{employee: Employee, action: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    console.log('emitting select event');
    this.onEmployeeAction.emit({ employee: this.thisEmployee, action: 'select'});
  }

  onEdit() {
    console.log('emitting edit event');
    this.onEmployeeAction.emit({ employee: this.thisEmployee, action: 'edit'});
  }

  onDelete() {
    console.log('emitting delete event');
    this.onEmployeeAction.emit({ employee: this.thisEmployee, action: 'delete'});
  }

}
