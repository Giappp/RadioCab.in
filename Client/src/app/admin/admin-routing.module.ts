import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageDriversComponent } from './components/manage-drivers/manage-drivers.component';
import { authGuard } from '../auth/guard/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminNavbarComponent,
    canActivate: [authGuard],

    children: [
      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'drivers', component: ManageDriversComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
