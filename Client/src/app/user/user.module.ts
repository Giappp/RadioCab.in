import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegistrationUserComponent } from './registration-user/registration-user.component';



@NgModule({
  declarations: [
    RegistrationUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
