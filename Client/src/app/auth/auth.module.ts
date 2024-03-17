import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoleComponent } from './components/register-role/register-role.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterDriverComponent,
    RegisterCompanyComponent,
    RegisterUserComponent,
    RegisterRoleComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
