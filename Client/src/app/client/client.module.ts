import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { CabcompanyComponent } from './features/cabcompany/cabcompany.component';
import { FeedbackComponent } from './features/feedback/feedback.component';
import { DriversComponent } from './features/drivers/drivers.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CabcompanyComponent,
    FeedbackComponent,
    DriversComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    CabcompanyComponent,
    FeedbackComponent,
    DriversComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ClientModule { }
