import { Injectable } from '@angular/core';
import { Weather } from './../models/weather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { 
    // this.weatherData = new Array(3);
    // this.weatherData.push({
    //   date: new Date('2021-05-07T08:22:36.6836195-07:00'),
    //   temperatureC: 43,
    //   temperatureF: 109,
    //   summary: 'Scorching'
    // });
  }

  GetWeather(): Observable<Weather[]> {
    let url = '/api/weatherforecast';

    return this.http.get<Weather[]>(url);
  }
}
