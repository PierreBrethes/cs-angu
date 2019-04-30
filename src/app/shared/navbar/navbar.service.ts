import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  getMyData(token: string): Observable<any> {
    return this.http.get(
      'https://graph.facebook.com/' +
        localStorage.getItem('userId') +
        '?fields=id,name,email,picture'
    );
  }

  checkTokenValidity(token: string): Observable<any> {
    return this.http.get('http://localhost:3001/auth/facebook/' + token);
  }
}
