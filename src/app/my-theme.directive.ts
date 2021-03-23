import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyTheme]'
})
export class MyThemeDirective {

  @HostBinding('style.color') color: string;
  @HostBinding('style.fontSize') fontSize: string;



  constructor(private elementRef: ElementRef) {
    this.color = 'black';
    this.fontSize = "20px";

  }

  @HostListener('mouseover') onMouseOver() {
    this.color = 'blue';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'red';

  }


}
