import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { ProfileDriverComponent } from './profile-driver/profile-driver.component';


@NgModule({
  declarations: [
  
    ProfileDriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
