import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataTransitService } from '../../login/dataShareComponent/data-transit.service';
import { LoginService } from '../../login/login.service';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  dataUserFb: User;

  constructor(
    private dataservice: DataTransitService,
    private router: Router,
    private loginservice: LoginService
  ) {}
  //function which will be called for all http calls
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log('interceptor done');

    return next.handle(req);
  }
}
