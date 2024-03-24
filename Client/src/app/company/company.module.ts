import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileCompanyComponent,
    CompanyDashboardComponent,
    CompanyServicesComponent,
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
