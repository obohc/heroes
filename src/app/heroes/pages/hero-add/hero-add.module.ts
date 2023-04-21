import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmationWindowModule } from './../../../shared/components/confirmation-window/confirmation-window.module';
import { TransformUppercaseModule } from './../../../shared/directives/transform-uppercase.module';
import { HeroAddComponent } from './hero-add.component';



const routes: Routes = [
  { path: "", component: HeroAddComponent },
];

@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    ConfirmationWindowModule,
    TransformUppercaseModule
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule { }
