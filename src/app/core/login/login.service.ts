import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {}

    findOrCreateAPI(
        id: string,
        name: string,
        email: string,
        token: string,
        image: string
    ): Observable<any> {
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        const body = new HttpParams()
            .set(`id`, id)
            .set('name', name)
            .set(`email`, email)
            .set('token', token)
            .set('image', image);

        return this.http.post(
            'https://developers.contentstream.co/auth/login',
            body.toString(),
            {
                headers,
                observe: 'response'
            }
        );
    }
}
