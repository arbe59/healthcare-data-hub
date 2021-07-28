import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HealthcareAuthService {
    constructor(private auth: AuthService) {}

    login(): void {
        this.auth.loginWithRedirect();
    }

    logOut(): void {
        this.auth.logout();
    }

    getUserInfo(): Observable<User> {  
        return this.auth.user$;
    }
}