import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['name', 'email', 'birthDate', 'basicSalary', 'status', 'group', 'description', 'action'];
  dataEmployee: Array<Employee> = []

  public constructor(private location: Location, private router: Router, private employeeService: EmployeeService) {
    this.dataEmployee = this.employeeService.getEmployee();
  }

  @ViewChild(MatTable)
  table!: MatTable<Employee>;

  goBack(): void {
    this.location.back();
  }
  add(): void {
    this.router.navigateByUrl(`/addEmployee`);
  }

  detailEmployee(id: number) {
    this.router.navigateByUrl(`/employee/${id}`);
  }

  removeData(id: number) {
    const index = id - 1
    this.employeeService.deleteEmployee(index)
    this.table.renderRows();
  }

}
