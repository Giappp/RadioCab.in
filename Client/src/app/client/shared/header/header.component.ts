import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //isLoggedIn: boolean = false;
  userName: string = '';
  userId: string = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Check if user is logged in
    // this.isLoggedIn = ;

    // If user is logged in, get user's name
    if (this.authService.isLoggedIn()) {
      this.userName = this.authService.getUserName(); // Replace with method to get user's name
      this.userId = this.authService.currentUserValue.userId
    }
  }

  logout() {
    this.authService.logout(); // Call the logout method from your authentication service
    this.authService.setAuthenticate(false);
    this.router.navigate(['/home']); // Redirect to login page after logout
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  loggedOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
