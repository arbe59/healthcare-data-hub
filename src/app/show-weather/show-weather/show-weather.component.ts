import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather-service.service';
import { Weather } from './../../models/weather';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.GetWeather().subscribe(data => {
      this.weatherData = data;
      console.log(data);
      console.log(this.weatherData);
    },
      err => console.log(err),
      () => console.log('All done!'));
  }

  private weatherData:Weather[] = new Array(0);
}
