import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurApproachRoutingModule } from './our-approach-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    OurApproachRoutingModule
  ]
})
export class OurApproachModule { }
