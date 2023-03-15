import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationWindowModule } from './../../../shared/components/confirmation-window/confirmation-window.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TransformUppercaseModule } from './../../../shared/directives/transform-uppercase.module';
import { HeroAddComponent } from './hero-add.component';


const routes: Routes = [
  { path: "", component: HeroAddComponent },
];

@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ConfirmationWindowModule,
    MaterialModule,
    TransformUppercaseModule
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule { }
