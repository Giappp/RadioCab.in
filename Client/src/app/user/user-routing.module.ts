import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { appGuard } from '../guard/app.guard';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { CabcompanyComponent } from './components/cabcompany/cabcompany.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileUserComponent,
    pathMatch: 'full',
    canActivate: [appGuard],
    data: {
      permittedRoles: ['Admin', 'User', 'Company', 'Driver'],
    }
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'company',
        component: CabcompanyComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      },

      {
        path: 'listing',
        component: CabcompanyComponent
      },

      {
        path: 'drivers',
        component: DriversComponent
      },

      {
        path: 'advertise',
        component: AdvertiseComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
