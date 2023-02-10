import { Directive } from '@angular/core';

@Directive({
  selector: '[jengaLabel]',
  host: {
    class: 'jenga-label',
  },
})
export class LabelDirective {
  constructor() {}
}
