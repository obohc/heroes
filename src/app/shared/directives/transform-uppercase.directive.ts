import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[toUppercase]'
})
export class TransformUppercaseDirective{

  constructor(private control: NgControl) { }
    
  @HostListener('keyup') 
  onKeyUp(): void {    
    this.control.control?.setValue(this.control.value.toUpperCase());
  }
  
}
