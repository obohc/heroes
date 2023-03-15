import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'src/app/shared/material/material.module';

import { HeroDetailsComponent } from './hero-details.component';

const routes: Routes = [
  { path: "", component: HeroDetailsComponent},
];

@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [HeroDetailsComponent]
})
export class HeroDetailsModule { }
