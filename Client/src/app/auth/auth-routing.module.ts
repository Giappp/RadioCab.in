import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterRoleComponent } from './components/register-role/register-role.component';
import { authGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuardGuard],
      },
      {
        path: 'register-company',
        component: RegisterCompanyComponent,
        canActivate: [authGuardGuard],
      },
      {
        path: 'register-driver',
        component: RegisterDriverComponent,
        canActivate: [authGuardGuard],
      },
      {
        path: 'register-user',
        component: RegisterUserComponent,
        canActivate: [authGuardGuard],
      },
      {
        path: 'register-role',
        component: RegisterRoleComponent,
        canActivate: [authGuardGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
