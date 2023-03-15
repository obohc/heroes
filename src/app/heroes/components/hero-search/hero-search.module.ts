import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroSearchComponent],
  exports: [HeroSearchComponent]
})
export class HeroSearchModule { }
