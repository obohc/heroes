import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[toUppercase]'
})
export class TransformUppercaseDirective{

  constructor(private el: ElementRef<HTMLInputElement>) { }
    
  @HostListener('keyup') onKeyUp() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }

}
