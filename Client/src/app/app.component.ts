import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = "Home Page";
  isAdminLoggedIn: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => {
      this.isAdminLoggedIn = user && user.userRole.includes('admin');
    });
  }

  isLoginPage(): boolean {
    return this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'auth';
  }

  shouldHideHeaderFooter(): boolean {
    return this.router.url.startsWith('/admin');
  }
}
