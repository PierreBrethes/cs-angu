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
import { DataTransitService } from '../../core/login/dataShareComponent/data-transit.service';
import { LoginService } from '../../core/login/login.service';
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
                Authorization: `Bearer ${localStorage.getItem('userJWT')}`
            }
        });
        return next.handle(req);
    }
}
