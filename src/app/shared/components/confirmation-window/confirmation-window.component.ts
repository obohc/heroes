import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from './../../../heroes/models/hero';

@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html',
})
export class ConfirmationWindowComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmationWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) {}

  confirmDeletion() { 
    this.dialogRef.close(true);
  }

  cancelDeletion() {
    this.dialogRef.close(false);
  }
}
