import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: LoginService, private router: Router,) { }
  ngOnInit(): void {
    if (this.service.checkOnline()) {
      this.router.navigateByUrl('/employee');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
