import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: LoginService) { }
  formLogin !: FormGroup
  fb = inject(FormBuilder)
  validPassword = false
  messageErrorLogin = ''

  ngOnInit(): void {
    this.formLogin = this.fb.group(
      {
        email: ['', Validators.compose([Validators.email, Validators.required])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      }
    )
  }
  loading = false

  login() {
    this.loading = true
    setTimeout(async () => {
      this.loading = false
      const result = await this.service.getUser(this.formLogin.value)
      if (result === 'Ok') {
        this.service.successLogin()
        this.router.navigateByUrl('/');
      } else {
        this.validPassword = true
        this.messageErrorLogin = result
      }
    }, 1000);
  }
}
