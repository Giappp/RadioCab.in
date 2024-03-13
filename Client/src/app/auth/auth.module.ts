import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterDriverComponent,
    RegisterCompanyComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
