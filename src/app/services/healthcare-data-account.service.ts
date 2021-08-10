import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HealthcareAccount } from '../models/healthcare-account';
import { HealthcareDataUsersService } from './healthcare-data-user.service';

@Injectable({
  providedIn: 'root'
})
export class HealthcareDataAccountsService {
  private accountApiUrl: string = '/api/Account';

  constructor(private http: HttpClient, private dataUserService: HealthcareDataUsersService) { }

  private accountIdSubject = new Subject<number>();
  accountIdAction$ = this.accountIdSubject.asObservable();

  accountIdChanged(id: number) {
    console.log('account id changed: ' + id);
    this.accountIdSubject.next(id);
  }

  accounts$ = this.http.get<HealthcareAccount[]>(this.accountApiUrl)
    .pipe(
      tap(data => console.log('Accounts: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

  accountById$ = combineLatest([
    this.accounts$,
    this.accountIdAction$
  ]).pipe(
    map(([accounts, id]) => 
      accounts.find(account => account.id === id),
      tap(account => console.log('selectedAccount', account))
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
