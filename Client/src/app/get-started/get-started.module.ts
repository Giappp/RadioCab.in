import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { PlansComponent } from './components/plans/plans.component';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    GetStartedRoutingModule
  ]
})
export class GetStartedModule { }
