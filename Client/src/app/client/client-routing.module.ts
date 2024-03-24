import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { FeedbackComponent } from './features/feedback/feedback.component';
import { CabcompanyComponent } from './features/cabcompany/cabcompany.component';
import { DriversComponent } from './features/drivers/drivers.component';
import { AdvertiseComponent } from './features/advertise/advertise.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },

      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      
      {
        path: 'feedback',
        component: FeedbackComponent,
        pathMatch: 'full'
      },

      {
        path: 'listing',
        component: CabcompanyComponent,
        pathMatch: 'full'
      },

      {
        path: 'drivers',
        component: DriversComponent,
        pathMatch: 'full'
      },

      {
        path: 'advertise',
        component: AdvertiseComponent,
        pathMatch: 'full'
      },

      // {
      //   path: 'account',
      //   children: [
      //     {
      //       path: 'user',
      //       component: ProfileUserComponent,
      //       pathMatch: 'full'
      //     },

      //     {
      //       path: 'company',
      //       component: ProfileCompanyComponent,
      //       pathMatch: 'full'
      //     },

      //     {
      //       path: 'driver',
      //       component: ProfileDriverComponent,
      //       pathMatch: 'full'
      //     }
      //   ]
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
