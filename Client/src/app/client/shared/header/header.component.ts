import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  //isLoggedIn: boolean = false;
  userName: string = '';
  userId: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if user is logged in
      if (this.authService.isLoggedIn()) {
        this.userName = this.authService.getUserName();
        this.userId = this.authService.currentUserValue.userId;
      } else {
        // Clear user data if not logged in
        this.userName = '';
        this.userId = '';
      }
    });

    // Check if user is logged in on component initialization
    if (this.authService.isLoggedIn()) {
      this.userName = this.authService.getUserName();
      this.userId = this.authService.currentUserValue.userId;
    }
  }

  logout() {
    this.authService.logout(); // Call the logout method from your authentication service
    this.userName = '';
    this.userId = '';
    this.router.navigate(['/home']); // Redirect to login page after logout
  }
  isLoggedIn() : boolean{
    if(this.authService.isLoggedIn()){
      this.userName = this.authService.getUserName();
      this.userId = this.authService.currentUserValue.userId;
      return true;
    }
    return false;
  }
}
