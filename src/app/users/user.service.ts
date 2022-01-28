
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, map, mergeMap, Observable, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  // apiUrl = "https://www.boredapi.com/api/activity";

  requestUrl = environment.devUsersUrl;

  users$ = (page: number, results: number) : Observable<User[]> =>
    this._http.get<User[]>(this.requestUrl + `?page=${page + 1}` + `&results=${results}&seed=abc`)
      .pipe(
        map((data: any) => data.results),
        // tap(data => console.log('Users: ', JSON.stringify(data))),
        shareReplay(1),
        // catchError((err) => this.handleError(err) )
      );

  constructor(
    private _http: HttpClient
  ) {

  }





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
    return throwError(() => errorMessage);
  }

}
