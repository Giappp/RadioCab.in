import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { authGuardGuard } from '../guard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'user/profile/:id',
    component: ProfileUserComponent,
    pathMatch: 'full',
    canActivate: [authGuardGuard]
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
