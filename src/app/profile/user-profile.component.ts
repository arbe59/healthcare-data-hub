import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;
  user: User;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.user = profile;
        this.profileJson = JSON.stringify(profile, null, 2);
        console.log(this.user);
      });
  }
}