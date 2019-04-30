import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardMenuService {
    constructor(private http: HttpClient) {}

    getUserBusinessAccounts(token: string): Observable<any> {
        return this.http.get(
            'https://graph.facebook.com/v3.2/me/accounts?fields=instagram_business_account,name&access_token=' +
                token
        );
    }
}
