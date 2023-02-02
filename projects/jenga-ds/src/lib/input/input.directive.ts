import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'input[jengaInput]',
  host: {
    class: 'bg-blue-500 text-2xl',
  },
})
export class InputDirective {
  // @HostBinding('style.padding') value = '20px';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '0.5rem 1rem';
    // this.el.nativeElement.style.fontSize = '0.875em';
    this.el.nativeElement.style.letterSpacing = '0.04em';
    this.el.nativeElement.style.border = 'solid 1px #ccc';
    this.el.nativeElement.style.borderRadius = '8px';
  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.outline = 'none';
    this.el.nativeElement.style.border = `solid 1px  hsl(
      var(--primary-color-hue, 350)
      var(--primary-color-saturation, 85%)
      80%
    )`;
  }

  @HostListener('focusout') onFocusOut() {
    this.el.nativeElement.style.border = 'solid 1px #ccc';
  }
}
