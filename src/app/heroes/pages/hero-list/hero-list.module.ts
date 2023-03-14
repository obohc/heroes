import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }