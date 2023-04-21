import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmationWindowComponent } from './confirmation-window.component';


@NgModule({
  declarations: [ConfirmationWindowComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    TranslateModule.forChild(),
  ],
  exports: [ConfirmationWindowComponent]
})
export class ConfirmationWindowModule { }
