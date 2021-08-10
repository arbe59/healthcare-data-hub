import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import { HealthcareUser } from '../models/healthcare-user';
import { HealthcareDataUsersService } from '../services/healthcare-data-user.service';
import { HealthcareDataAccountsService } from '../services/healthcare-data-account.service';
import { HealthcareAccount } from '../models/healthcare-account';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;
  user: User;
  healthUser: HealthcareUser;
  healthAccount: HealthcareAccount;

  user$: Observable<User> = this.auth.user$;
  healthUser$: Observable<HealthcareUser> = this.userService.userWithEmail$;
  healthAccount$: Observable<HealthcareAccount> = this.accountService.accountById$;

  vm$ = combineLatest([
    this.user$,
    this.healthUser$,
    this.healthAccount$
  ]).pipe(
    map(([user, healthUser, healthAccount]) => 
      ({ user, healthUser, healthAccount }))
  );

  constructor(public auth: AuthService, 
              private userService: HealthcareDataUsersService, 
              private accountService: HealthcareDataAccountsService) {}

  ngOnInit(): void {
    this.user$.subscribe(authUser => {
      this.userService.userEmailChanged(authUser.email);
    });

    // this.auth.user$.subscribe(
    //   (profile) => {
    //     this.user = profile;
    //     this.profileJson = JSON.stringify(profile, null, 2);
    //     console.log(this.profileJson);
    //     this.userService.GetUserByEmail(this.user.email).subscribe((healthU) => {
    //       this.healthUser = healthU;
    //       console.log(this.healthUser);
    //       console.log(this.healthUser.accountID);
    //       this.accountService.GetAccountByID(this.healthUser.accountID).subscribe((account) => {
    //         this.healthAccount = account;
    //         console.log(this.healthAccount);
    //       })
    //     })
    //   });
  }
}