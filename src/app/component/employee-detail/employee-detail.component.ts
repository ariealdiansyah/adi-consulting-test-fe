import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  data!: Employee
  title = 'Detail Employee'
  constructor(private location: Location, private service: EmployeeService, private route: ActivatedRoute,) {
    this.data = this.service.getDetailEmployee(parseInt(this.route.snapshot.params['id']))
  }

  goBack(): void {
    this.location.back();
  }
}
