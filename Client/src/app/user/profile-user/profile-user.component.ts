import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit {
  userId: string;
  username: string;
  email: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.authService.getUserInfo(this.userId).subscribe({
      next: (response) => {
        this.username = response.username;
        this.email = response.email;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
