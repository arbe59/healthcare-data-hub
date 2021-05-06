import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowWeatherComponent } from './show-weather/show-weather/show-weather.component';

const routes: Routes = [
  { path: 'weather', component: ShowWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
