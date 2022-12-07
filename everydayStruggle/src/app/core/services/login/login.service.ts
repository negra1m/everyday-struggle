import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserModel } from '../../models/user/user.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _userBehaviors = new BehaviorSubject<boolean>(this.isUserLogged());
  userBehavaiors$ = this._userBehaviors.asObservable();

  private _userData = new Subject<string[]>();
  userData$ = this._userData.asObservable();

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }


  /**
   * Login and Logout
   */

  public login(username: string, password: string): Observable<any> {
    const url = `${environment.services.legacy}/login`;
    const body = new HttpParams().set('username', username).set('password', password);
    const headers = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };

    return this.httpClient.post(url, body, headers);
  }

  public logout() {
    localStorage.clear();
    this.updateUserStatus(false);

    this.router.navigate(['/login']);
  }


  /**
   * Get User
   */

  public getUserData(): Observable<UserModel> {
    return this.httpClient.get(`${environment.services.current}/users`).pipe(
      tap((userData: UserModel) => this._userData.next(userData.permissions))
    );
  }


  /**
   * Helpers
   */

  public isUserLogged() {
    return (localStorage.getItem('user') && localStorage.getItem('token')) ? true : false;
  }


  /**
   * Subject Functions
   */

  public updateUserStatus(status: boolean) {
    this._userBehaviors.next(status);
  }

}
