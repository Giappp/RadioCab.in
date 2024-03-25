import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CabcompanyComponent } from './components/cabcompany/cabcompany.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    ProfileUserComponent,
        HomeComponent,
        AboutComponent,
        DriversComponent,
        FeedbackComponent,
        CabcompanyComponent,
        AdvertiseComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
