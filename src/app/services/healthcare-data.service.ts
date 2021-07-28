import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthcareUser } from '../models/healthcare-user';

@Injectable({
  providedIn: 'root'
})
export class HealthcareDataService {

  constructor(private http: HttpClient) { }

  GetUsers(): Observable<HealthcareUser[]> {
    let url = '/api/User';

    return this.http.get<HealthcareUser[]>(url);
  }

  get(url): Observable<any> {
    return this.http.get<any>(url);
  }
}
