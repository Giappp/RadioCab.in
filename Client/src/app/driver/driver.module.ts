import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { RegistrationDriverComponent } from './registration-driver/registration-driver.component';


@NgModule({
  declarations: [
    RegistrationDriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
