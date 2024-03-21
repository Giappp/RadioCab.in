import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title="Home Page";
  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}
  isLoginPage(): boolean {    
    return this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'auth';
  }
}
