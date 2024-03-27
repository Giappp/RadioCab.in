import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit {
  adminName: string = 'Admin';

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAdminName();
  }

  getAdminName() {
    this.authService.getAdminName()
      .subscribe(data => {
        this.adminName = data.adminName;
      });
  }
}
