import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ConfirmationWindowComponent } from './confirmation-window.component';


@NgModule({
  declarations: [ConfirmationWindowComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ConfirmationWindowComponent]
})
export class ConfirmationWindowModule { }
