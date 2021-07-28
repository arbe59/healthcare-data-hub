import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './app-nav.component';
import { AuthModule } from '@auth0/auth0-angular';
import { Constants } from './constants';
import { LoginButtonComponent } from './auth/login-button.component';
import { SignupButtonComponent } from './auth/signup-button.component';
import { ProfileComponent } from './profile/user-profile.component';
import { ProfilePictureComponent } from './profile/profile-pic.component';
import { UserListComponent } from './users/user-list.component';
import { HomeComponent } from './home.component';
import { AuthComponent } from './auth/auth.component';
import { PatientInfoComponent } from './info/patients-info.component';
import { ProviderInfoComponent } from './info/provider-info.component';
import { AboutInfoComponent } from './info/about.component';
import { DashboardComponent } from './profile/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    ProfileComponent,
    ProfilePictureComponent,
    UserListComponent,
    AuthComponent,
    PatientInfoComponent,
    ProviderInfoComponent,
    AboutInfoComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: Constants.auth0Domain,
      clientId: Constants.auth0ClientId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
