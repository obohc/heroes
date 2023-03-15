import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { HeroListComponent } from './hero-list.component';
import { SearchModule } from 'src/app/shared/components/search/search.module';

const routes: Routes = [
  { path: "", component: HeroListComponent },
];

@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }
