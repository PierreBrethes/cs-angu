import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(businessId): Observable<any> {
        return this.http.get(
            'https://developers.contentstream.co/me/feed/' + businessId
        );
    }
}
