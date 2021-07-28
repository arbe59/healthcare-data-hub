import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  public user: User;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

  login(): void {
      this.auth.loginWithRedirect();
      this.user = this.auth.user$;
  }

  logout(): void {
      this.auth.logout();
  }
}