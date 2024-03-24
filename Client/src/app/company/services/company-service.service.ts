import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  private baseUrl = 'http://localhost:5164';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient,private authService:AuthService) { }
  checkIdentityCompany({IdentityId: id}) : Observable<any>{
    return this.http.post(`${this.baseUrl}/api/Company/CheckIdentityCompany`,{IdentityId: id},this.httpOptions).pipe(
      map((response:any) => {
        return response;
      })
    )
  }
}
