import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  private loggedIn = false;

  constructor() {
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
