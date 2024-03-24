import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { IUserLogin } from '../interfaces/iuser-login';
import { Authresponse } from '../interfaces/authresponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRegister } from '../interfaces/user-register';
import { RoleRegister } from '../interfaces/roleregister';

@Injectable({
  providedIn: 'root' || 'any',
})

export class AuthService {
  private baseUrl = 'http://localhost:5164';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private currentUserSubject$: BehaviorSubject<Authresponse>;
  public currentUser$: Observable<Authresponse>;
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
    this.currentUserSubject$ = new BehaviorSubject<Authresponse>((JSON.parse(localStorage.getItem('currentUser'))));
    this.currentUser$ = this.currentUserSubject$.asObservable();
  }

  public get currentUserValue() {
    this.currentUserSubject$.next(JSON.parse(localStorage.getItem('currentUser')));
    return this.currentUserSubject$.value;
  }

  loginUserRequest(data: IUserLogin): Observable<Authresponse> {
    return this.http
      .post<Authresponse>(
        `${this.baseUrl}/api/Auth/login`,
        data,
        this.httpOptions
      )
      .pipe(map((response:any) => {
        localStorage.setItem('jwt', response.data.token);
        localStorage.setItem('currentUser',JSON.stringify(response.data));
        this.currentUserSubject$.next(JSON.parse(localStorage.getItem('currentUser')));
        return response;
      }),catchError(this.handleError<Authresponse>('Failed to login')));
  }

  registerUserRequest(data: UserRegister): Observable<any> {
    return this.http
      .post<Authresponse>(
        `${this.baseUrl}/api/Auth/register`,
        data,
        this.httpOptions
      )
      .pipe(map((response: any) => {
        localStorage.setItem('jwt', response.data.token);
        localStorage.setItem('currentUser',JSON.stringify(response.data));
        this.currentUserSubject$.next(JSON.parse(localStorage.getItem('currentUser')));
        return response;
      }),
        catchError(this.handleError<Authresponse>('Failed to register')));
  }

  registerRoleRequest(data: RoleRegister) : Observable<any>{
    return this.http
      .post<Authresponse>(
        `${this.baseUrl}/api/Auth/register/Role`,
        data,
        this.httpOptions
      )
      .pipe(map((response:any) => {
        localStorage.setItem('jwt', response.data.token);
        localStorage.setItem('currentUser',JSON.stringify(response.data));
        this.currentUserSubject$.next(JSON.parse(localStorage.getItem('currentUser')));
        return response;
      }),
        catchError(this.handleError<Authresponse>('Failed to register')));
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
    this.currentUserSubject$.next(null);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserName(): string {
    return this.currentUserSubject$.value ? this.currentUserSubject$.value.userName : '';
  }

  getAdminName(): Observable<any> { // get admin name
    return this.http.get<any>('url-to-your-api-endpoint');
  }

  getUserRole(): Array<string> {
    return this.currentUserSubject$.value.userRole;
  }

  getUserInfo(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/api/User/${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError<User>('Failed to get user info')));
  }

  getEarnings(): Observable<any> {
    return this.http.get<any>('URL_TO_GET_EARNINGS_DATA');
  }
}
