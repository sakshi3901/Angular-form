import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseServerUrl = 'http://localhost:4000/';
  registerUser(data: any): Observable<any> {
    return this.http.post(this.baseServerUrl + '', data);
  }
  loginUser(data: any): Observable<any> {
    return this.http.post(this.baseServerUrl + 'login', data);
  }
}
