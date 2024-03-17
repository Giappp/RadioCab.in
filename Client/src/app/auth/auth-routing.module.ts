import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterRoleComponent } from './components/register-role/register-role.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'register-company',
        component: RegisterCompanyComponent,
        pathMatch: 'full'
      },
      {
        path: 'register-driver',
        component: RegisterDriverComponent,
        pathMatch: 'full'
      },
      {
        path: 'register-user',
        component: RegisterUserComponent,
        pathMatch: 'full'
      },
      {
        path: 'register-role',
        component: RegisterRoleComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
