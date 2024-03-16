import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { IUserResponse } from '../interfaces/iuser-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:5164/api/Auth/login";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient){
    
  }
  loginUserRequest(data:IUserResponse) : Observable<IUserResponse> {
    return this.http.post<IUserResponse>(this.baseUrl,data,this.httpOptions).pipe(
      catchError(this.handleError<IUserResponse>('Failed to login'))
    )
  }
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
