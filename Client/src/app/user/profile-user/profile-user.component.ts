import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit {
  userId: string;
  constructor(private authService:AuthService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }
}
