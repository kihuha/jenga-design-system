import { Directive } from '@angular/core';

@Directive({
  selector: '[jengaCell]',
  host: {
    class: 'bg-red-400',
  },
})
export class CellDirective {
  constructor() {}
}
