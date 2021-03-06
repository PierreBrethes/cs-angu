import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    constructor(private http: HttpClient) {}

    getMyData(): Observable<any> {
        return this.http.get('https://developers.contentstream.co/me');
    }
}
