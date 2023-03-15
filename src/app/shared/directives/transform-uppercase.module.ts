import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformUppercaseDirective } from './transform-uppercase.directive';


@NgModule({
  declarations: [TransformUppercaseDirective],
  imports: [
    CommonModule
  ],
  exports: [TransformUppercaseDirective]
})
export class TransformUppercaseModule { }
