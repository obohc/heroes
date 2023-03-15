import { TransformUppercaseDirective } from './transform-uppercase.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TransformUppercaseDirective],
  imports: [
    CommonModule
  ],
  exports: [TransformUppercaseDirective]
})
export class TransformUppercaseModule { }
