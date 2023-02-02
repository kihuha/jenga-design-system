import { Directive } from '@angular/core';

@Directive({
  selector: '[jengaHint]',
  host: {
    class: 'text-xs text-slate-400',
  },
})
export class HintDirective {
  constructor() {}
}
