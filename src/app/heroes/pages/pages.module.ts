import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsModule } from './hero-details/hero-details.module';
import { HeroAddModule } from './hero-add/hero-add.module';
import { HeroListModule } from './hero-list/hero-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroAddModule,
    HeroDetailsModule,
    HeroListModule,
    HomeModule,
  ]
})
export class PagesModule { }
