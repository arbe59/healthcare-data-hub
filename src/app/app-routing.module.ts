import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/user-profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './home.component';
import { PatientInfoComponent } from './info/patients-info.component';
import { ProviderInfoComponent } from './info/provider-info.component';
import { AboutInfoComponent } from './info/about.component';
import { DashboardComponent } from './profile/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'patients', component: PatientInfoComponent },
  { path: 'providers', component: ProviderInfoComponent },
  { path: 'about', component: AboutInfoComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
