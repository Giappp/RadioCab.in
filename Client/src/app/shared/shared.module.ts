import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthModule } from '../auth/auth.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthModule,
    AuthRoutingModule
  ],
  
})
export class SharedModule { }
