import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  formAdd !: FormGroup
  fb = inject(FormBuilder)
  loading = false
  maxDate: Date;
  title = 'Add Employee'

  constructor(private router: Router, private service: EmployeeService, private location: Location,) {
    this.maxDate = new Date();
  }
  ngOnInit(): void {
    this.formAdd = this.fb.group(
      {
        username: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        basicSalary: ['', Validators.required],
        birthDate: ['', Validators.required],
        status: ['', Validators.required],
        group: ['', Validators.required],
        description: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
      }
    )
  }
  add(): void {
    console.log(this.formAdd.value);
    const { username, email, firstName, lastName, basicSalary, birthDate, status, group, description } = this.formAdd.value
    const data: Employee = {
      id: this.service.getLastId(),
      username,
      firstName,
      lastName,
      email,
      basicSalary,
      birthDate: new Date(birthDate),
      status,
      group,
      description
    }
    this.service.addEmployee(data)
    this.router.navigateByUrl('/employee')
  }

  goBack(): void {
    this.location.back();
  }
}
