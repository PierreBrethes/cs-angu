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
        email: string,
        token: string,
        name: string,
        image: string
    ): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        });
        const body = new HttpParams()
            .set(`id`, id)
            .set('name', name)
            .set(`email`, email)
            .set('token', token)
            .set('image', image);

        const body2 =
            'id=${id}&name=${name}&email=${email}&token=${token}&image=${image}';

        return this.http.post('http://localhost:3001/auth/login', body2, {
            headers,
            observe: 'response'
        });
    }
}
