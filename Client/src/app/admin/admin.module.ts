import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageDriversComponent } from './components/manage-drivers/manage-drivers.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManageDriversComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginator
  ],
  exports: [
    AdminNavbarComponent
  ]
})
export class AdminModule { }
