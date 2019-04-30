import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  checkFbToken(token: string): Observable<any> {
    return this.http.get('http://localhost:3001/auth/facebook/' + token);
  }
}
