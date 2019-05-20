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
            `https://developers.contentstream.co/me/business/${businessId}/spying`
        );
    }

    addSpiedAccount(businessId, accountName): Observable<any> {
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        const body = new HttpParams().set(`accountName`, accountName);

        return this.http.post(
            `https://developers.contentstream.co/me/business/${businessId}/spying`,
            body.toString(),
            {
                headers,
                observe: 'response'
            }
        );
    }

    deleteSpiedAccount(businessId, spiedAccountId): Observable<any> {
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        return this.http.delete(
            `https://developers.contentstream.co/me/business/${businessId}/spying/${spiedAccountId}`,
            {
                headers,
                observe: 'response'
            }
        );
    }
}
