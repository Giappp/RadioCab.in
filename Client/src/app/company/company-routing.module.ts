import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { companyGuard } from './guard/company.guard';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { StartedPlanComponent } from './components/started-plan/started-plan.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CompanyDashboardComponent,
    pathMatch: 'full',
    data: {
      permittedRoles: ['company'],
    },
    canActivate: [companyGuard]
  },
  {
    path: 'services',
    component: CompanyServicesComponent,
    pathMatch: 'full',
    data: {
      permittedRoles: ['company'],
    },
    canActivate: [companyGuard]
  },
  {
    path: 'get-started',
    component: GetStartedComponent,
    data: {
      permittedRoles: ['company'],
    },
    pathMatch: 'full'
  },
  {
    path: 'started-plans',
    component: StartedPlanComponent,
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
