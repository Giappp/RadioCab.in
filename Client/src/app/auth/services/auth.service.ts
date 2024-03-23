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
  private currentUserSubject: BehaviorSubject<Authresponse>;
  public currentUser: Observable<Authresponse>;
  private isAuthenticated = false;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Authresponse>((JSON.parse(localStorage.getItem('currentUser'))));
    this.currentUser = this.currentUserSubject.asObservable();
    this.isAuthenticated = !!localStorage.getItem('jwt');
  }

  public get currentUserValue(): Authresponse {
    return this.currentUserSubject.value;
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
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserName(): string {
    return this.currentUserSubject.value ? this.currentUserSubject.value.userName : '';
  }

  getAdminName(): Observable<any> { // get admin name
    return this.http.get<any>('url-to-your-api-endpoint');
  }

  setAuthenticate(value: boolean) {
    this.isAuthenticated = value;
  }
  getUserRole(): Array<string> {
    return this.currentUserValue.userRole;
  }

  getUserInfo(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/api/User/${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError<User>('Failed to get user info')));
  }
}
