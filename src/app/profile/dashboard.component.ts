import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-spa-js';
import { HealthcareAuthService } from '../auth/auth-service.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(public auth: HealthcareAuthService) {}

  ngOnInit(): void {
    this.auth.getUserInfo().subscribe(
      (profile) => (this.user = profile)
    );
  }

  logout(): void {
    this.auth.logOut();
  }
}