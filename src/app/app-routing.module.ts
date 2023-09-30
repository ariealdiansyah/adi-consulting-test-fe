import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page'
  },
  {
    path: 'employee',
    component: EmployeeListComponent,
    title: 'Employee List Page'
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
    title: 'Employee Detail Page'
  },
  {
    path: 'addEmployee',
    component: EmployeeAddComponent,
    title: 'Add Employee Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
