import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable, Subject, throwError } from 'rxjs';
import { HealthcareUser } from '../models/healthcare-user';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HealthcareDataUsersService {
  private userApiUrl: string = '/api/User';

  constructor(private http: HttpClient) { }

  private userEmailSubject = new Subject<string>();
  userEmailAction$ = this.userEmailSubject.asObservable();

  userEmailChanged(email: string) {
    console.log('user email changed: ' + email);
    this.userEmailSubject.next(email);
  }

  users$ = this.http.get<HealthcareUser[]>(this.userApiUrl)
    .pipe(
      tap(data => console.log('Users: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

  userWithEmail$ = combineLatest([
    this.users$,
    this.userEmailAction$
  ]).pipe(
    map(([users, email]) => 
      users.find(user => user.email === email),
      tap(user => console.log('selectedUser', user))
    )
  );

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
