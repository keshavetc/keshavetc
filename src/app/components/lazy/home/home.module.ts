import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent_ } from './home.component';


@NgModule({
  declarations: [HomeComponent_],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
