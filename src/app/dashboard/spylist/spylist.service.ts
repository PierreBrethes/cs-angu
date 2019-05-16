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
export class SpylistService {
    constructor(private http: HttpClient) {}

    getSpiedList(businessId): Observable<any> {
        return this.http.get(
            `http://localhost:3001/me/businessAccount/${businessId}/spiedAccounts`
        );
    }

    addSpiedAccount(businessId, spiedAccountName): Observable<any> {
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        const body = new HttpParams().set(`name`, spiedAccountName);

        return this.http.post(
            `http://localhost:3001/me/spying/${businessId}`,
            body.toString(),
            {
                headers,
                observe: 'response'
            }
        );
    }
}
