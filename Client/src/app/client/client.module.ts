import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { CabcompanyComponent } from './features/cabcompany/cabcompany.component';
import { FeedbackComponent } from './features/feedback/feedback.component';
import { DriversComponent } from './features/drivers/drivers.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CabcompanyComponent,
    FeedbackComponent,
    DriversComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
