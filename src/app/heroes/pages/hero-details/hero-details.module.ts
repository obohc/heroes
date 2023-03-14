import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsComponent } from './hero-details.component';


@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroDetailsComponent]
})
export class HeroDetailsModule { }
