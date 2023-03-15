import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';

import { HeroesComponent } from './heroes.component';


@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SpinnerModule
  ],
})
export class HeroesModule { }
