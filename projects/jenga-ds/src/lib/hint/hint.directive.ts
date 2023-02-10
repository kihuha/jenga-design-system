import { Directive } from '@angular/core';

@Directive({
  selector: '[jengaHint]',
  host: {
    class: 'jenga-hint',
  },
})
export class HintDirective {
  constructor() {}
}
