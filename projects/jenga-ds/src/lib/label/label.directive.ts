import { Directive } from '@angular/core';

@Directive({
  selector: '[jengaLabel]',
  host: {
    class: 'text-sm font-semibold',
  },
})
export class LabelDirective {
  constructor() {}
}
