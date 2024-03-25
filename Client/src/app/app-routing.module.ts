import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appGuard } from './guard/app.guard';
import { companyGuard } from './company/guard/company.guard';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/home',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then((m) => m.CompanyModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
