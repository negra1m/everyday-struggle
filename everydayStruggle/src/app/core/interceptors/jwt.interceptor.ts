import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  isUserLogged: boolean;

  constructor() { }


  /**
   * Main Interceptor
   */

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('login')) { return next.handle(request); }

    return next.handle(this.addAuth(request));
  }


  /**
   * Auth Function
   */

  addAuth(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: this.authHeaders(request)
    });
  }


  /**
   * Decides wich type of auth will use based on API path
   */

  authHeaders(request: HttpRequest<any>) {
    switch (true) {
      case (request.url.includes(environment.services.performance)):
        return {
          Authorization: `Basic ${btoa('GYEV:2019PACCESS')}`,
          From: localStorage.getItem('user'),
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache'
        };

      case (request.url.includes(environment.services.legacy)):
        return {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache'
        };

      default:
        return {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          From: localStorage.getItem('user'),
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache'
        };
    }
  }
}
