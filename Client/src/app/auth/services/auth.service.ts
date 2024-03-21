import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { User } from '../../models/user';
import { IUserLogin } from '../interfaces/iuser-login';
import { Authresponse } from '../interfaces/authresponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5164';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private isAuthenticated = false;
  constructor(private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem('jwt');
  }
  loginUserRequest(data: IUserLogin): Observable<Authresponse> {
    return this.http
      .post<Authresponse>(
        `${this.baseUrl}/api/Auth/login`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<Authresponse>('Failed to login')));
  }
  registerUserRequest(data: User): Observable<any> {
    return this.http
      .post<Authresponse>(
        `${this.baseUrl}/api/Auth/register`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<Authresponse>('Failed to register')));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt');
  }
  public getAuthentication() {
    return this.isAuthenticated;
  }
  public setAuthenticate(on: boolean) {
    this.isAuthenticated = on;
  }
}
