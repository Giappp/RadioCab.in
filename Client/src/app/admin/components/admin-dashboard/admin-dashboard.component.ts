import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  earningsData: any;

  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
    this.dataService.getEarnings().subscribe(data => {
      this.earningsData = data;
    });
  }
}
