import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { companyGuard } from './guard/company.guard';
import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  {
    path: 'company/dashboard',
    component: CompanyDashboardComponent,
    pathMatch: 'full',
    data: {
      permittedRoles: ['company'],
    },
    canActivate: [companyGuard]
  },
  {
    path: 'company/services',
    component: CompanyServicesComponent,
    pathMatch: 'full',
    data: {
      permittedRoles: ['company'],
    },
    canActivate: [companyGuard]
  },
  {
    path: 'company/get-started',
    component: GetStartedComponent,
    data: {
      permittedRoles: ['company'],
    },
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
