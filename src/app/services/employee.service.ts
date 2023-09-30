import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor() { }
  datas: Employee[] = [
    {
      id: 1,
      username: 'contoh',
      firstName: "Contoh",
      lastName: "A",
      email: 'contoh@a.com',
      birthDate: new Date(),
      basicSalary: 100000,
      status: "contoh status",
      group: "IT",
      description: 'ini adalah contoh user'
    },
    {
      id: 2,
      username: 'contoh',
      firstName: "Contoh",
      lastName: "A",
      email: 'contoh@a.com',
      birthDate: new Date(),
      basicSalary: 100000,
      status: "contoh status",
      group: "IT",
      description: 'ini adalah contoh user'
    },
  ];
  addEmployee(employee: Employee) {
    this.datas.push(employee);
  }

  getEmployee() {
    return this.datas;
  }

  getDetailEmployee(id: number): Employee {
    return this.datas[id - 1]
  }

  deleteEmployee(id: number) {
    this.datas.splice(id, 1);
  }

  clearEmployee() {
    this.datas = [];
    return this.datas;
  }

  getLastId(): number {
    return this.datas.length
  }
}
