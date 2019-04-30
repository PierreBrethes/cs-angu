import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(businessId, token) {
        return this.http.get(
            'http://localhost:3001/feed/' + businessId + '/' + token
        );
    }
}
