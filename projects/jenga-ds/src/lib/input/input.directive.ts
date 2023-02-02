import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'input[jengaInput]',
  host: {
    class:
      'block w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring focus:ring-primary-200 text-sm tracking-wide',
  },
})
export class InputDirective {
  constructor() {}

  @Input('formControlName') name: string = '';
}
