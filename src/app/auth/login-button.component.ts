import { Component, OnInit } from '@angular/core';
import { HealthcareAuthService } from './auth-service.component';

@Component({
  selector: 'app-login-button',
  template: '<button class="btn btn-primary btn-block" (click)="loginWithRedirect()">Log in</button>',
  styles: [],
})
export class LoginButtonComponent implements OnInit {
  constructor(private auth: HealthcareAuthService) {}
  ngOnInit(): void {}
  loginWithRedirect(): void {
    this.auth.login();
  }
}