import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'input[jengaInput]',
  host: {
    class: 'jenga-input',
  },
})
export class InputDirective {
  constructor() {}

  @Input('formControlName') name: string = '';
}
