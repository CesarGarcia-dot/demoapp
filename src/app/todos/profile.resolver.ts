import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Profile } from './profile';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Profile> {

  constructor(
    private todoService: TodoService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> | Promise<Profile> {
    return this.todoService.getProfile(route.params['id']).pipe(
      catchError(error => {
        console.log("resolver error: " + error);
        return of(error);
      })
    )
  }
}
