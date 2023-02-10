import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'jenga-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class Accordion {
  openItems: { [key: number]: 'open' | 'close' } = {};
  defaultOpen = 0;
  children = [0, 1, 2];

  constructor() {
    this.children.map((_, index) => {
      if (index === this.defaultOpen) {
        this.openItems[index] = 'open';
      } else {
        this.openItems[index] = 'close';
      }
    });
  }

  toggleAccordion(index: number) {
    if (this.openItems[index] === 'open') {
      this.openItems[index] = 'close';
    } else {
      this.openItems[index] = 'open';
    }
  }
}
