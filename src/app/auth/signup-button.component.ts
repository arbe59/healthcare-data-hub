import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: '<button class="btn btn-secondary btn-block" (click)="loginWithRedirect()">Sign up</button>',
  styles: [],
})
export class SignupButtonComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}