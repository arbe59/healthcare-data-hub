import { Component } from '@angular/core';
import { HealthcareAuthService } from './auth/auth-service.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  constructor(public auth: HealthcareAuthService) { }

  signUp(): void {
    this.auth.login();
  }
}