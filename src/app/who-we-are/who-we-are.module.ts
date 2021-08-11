import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule
  ]
})
export class WhoWeAreModule { }
