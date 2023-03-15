import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from './../../../heroes/models/hero';

@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html',
  styleUrls: ['./confirmation-window.component.scss']
})
export class ConfirmationWindowComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmationWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) {}

  public confirmDeletion(): void { 
    this.dialogRef.close(true);
  }

  public cancelDeletion(): void {
    this.dialogRef.close(false);
  }
}
