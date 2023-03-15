import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationWindowModule } from './../../../shared/components/confirmation-window/confirmation-window.module';
import { HeroAddComponent } from './hero-add.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


const routes: Routes = [
  { path: "", component: HeroAddComponent },
];

@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ConfirmationWindowModule,
    ReactiveFormsModule,
    MaterialModule, 
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule { }
