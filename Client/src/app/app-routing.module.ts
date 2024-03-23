import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appGuard } from './guard/app.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'user',
    canActivate: [appGuard],
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
