import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroAddComponent } from './hero-add.component';


@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule { }
