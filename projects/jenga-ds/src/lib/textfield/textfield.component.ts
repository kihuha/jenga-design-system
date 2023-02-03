import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'jenga-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
})
export class Textfield {
  @ViewChild('startIcon') startIcon!: ElementRef<HTMLDivElement>;
  @ViewChild('input') input!: ElementRef<HTMLDivElement>;
  @ViewChild('endIcon') endIcon!: ElementRef<HTMLDivElement>;

  @Input()
  error: string | null = null;

  constructor() {}

  ngAfterViewInit() {
    /**
     * If the start icon is present, adjust the padding left on the input
     * that has been projected inside the input div
     */
    if (this.startIcon.nativeElement.children.length > 0) {
      this.input.nativeElement.firstElementChild?.classList.add('pl-10');
    }

    /**
     * If the end icon is present, adjust the padding right on the input
     * that has been projected inside the input div
     */
    if (this.endIcon.nativeElement.children.length > 0) {
      this.input.nativeElement.firstElementChild?.classList.add('pr-10');
    }

    /**
     * If an error is present, highlight the input field appropriately
     */

    if (this.error) {
      this.input.nativeElement.firstElementChild?.classList.add(
        'border-red-500'
      );
    }
  }
}
