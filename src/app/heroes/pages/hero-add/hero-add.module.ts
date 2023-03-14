import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroAddComponent } from './hero-add.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule, 
    FormsModule,
    MaterialModule, 
    RouterModule
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule { }
