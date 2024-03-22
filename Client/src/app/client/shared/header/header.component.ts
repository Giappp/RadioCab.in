import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router,private auth:AuthService){}
  redirectToLogin(){
    this.router.navigate(['auth/login']);
  }
  isLoggedIn(){
    return this.auth.getAuthentication();
  }
  loggedOut(){
    this.auth.logout();
    this.router.navigate(['user/home']);
  }
}
