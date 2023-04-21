import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

import { HeroDetailsComponent } from './hero-details.component';

const routes: Routes = [
  { path: "", component: HeroDetailsComponent },
];

@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  exports: [HeroDetailsComponent]
})
export class HeroDetailsModule { }
