import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpylistService {
    constructor(private http: HttpClient) {}

    getSpiedList() {
        return this.http.get('http://localhost:3001/feed/');
    }
}
