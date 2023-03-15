import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SpinnerComponent } from './spinner.component';


@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
