import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

import { User } from '../../models/user';
import { IUserLogin } from '../interfaces/iuser-login';
import { Authresponse } from '../interfaces/authresponse';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<Authresponse>((JSON.parse(localStorage.getItem('currentUser'))));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Authresponse {
    localStorage.removeItem('jwt');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
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
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserName(): string {
    return this.currentUserSubject.value ? this.currentUserSubject.value.userName : '';
  }

  getAdminName(): Observable<any> { // get admin name
    return this.http.get<any>('url-to-your-api-endpoint');
  }

  getUserRole(): Array<string> {
    return this.currentUserValue.userRole;
  }

  getUserInfo(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/api/User/${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError<User>('Failed to get user info')));
  }

  getEarnings(): Observable<any> {
    return this.http.get<any>('URL_TO_GET_EARNINGS_DATA');
  }
}
