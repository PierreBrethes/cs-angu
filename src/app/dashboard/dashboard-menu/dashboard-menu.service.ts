import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardMenuService {
    constructor(private http: HttpClient) {}

    getUserBusinessAccounts(token: string): Observable<any> {
        return this.http.get('http://localhost:3001/me/businessAccounts');
    }
}
