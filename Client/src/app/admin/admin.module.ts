import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageDriversComponent } from './components/manage-drivers/manage-drivers.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManageDriversComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
