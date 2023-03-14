import { HeroListModule } from './../hero-list/hero-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeroListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
