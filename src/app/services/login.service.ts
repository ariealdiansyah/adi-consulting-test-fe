import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  user: User[] = [
    {
      email: 'test@test.com',
      password: '123456'
    }
  ]

  userLogin: Login = {
    isLoggedIn: false
  };

  checkOnline() {
    if (this.userLogin.isLoggedIn) {
      return this.userLogin.isLoggedIn
    } else {
      return false
    }
  }

  successLogin() {
    this.userLogin.isLoggedIn = true
  }

  getUser(data: User): string {
    const result = this.user.find((x) => x.email === data.email && x.password === data.password)
    if (result) {
      return 'Ok'
    } else {
      return 'Email / Password Salah'
    }
  }
}
