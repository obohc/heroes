import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes: Routes = [
  { path: "", component: HeroListComponent },
];

@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    RouterModule
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }
