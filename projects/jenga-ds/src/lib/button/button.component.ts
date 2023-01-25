import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'jenga-button',
  template: `<button
    class="btn"
    [ngClass]="{
      'btn--sm': this.size === 'sm',
      'btn--md': this.size === 'md',
      'btn--lg': this.size === 'lg'
    }"
  >
    <span
      *ngIf="icon"
      class="material-symbols-rounded"
      data-testid="btn-icon"
      >{{ icon }}</span
    >
    <span data-testid="btn-label">{{ label }}</span>
  </button>`,
  styleUrls: ['./button.component.css'],
  imports: [CommonModule],
})
export class Button {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = '';

  /**
   * Button icon
   *
   * optional
   */
  @Input()
  icon: string = '';

  /**
   * How large should the button be?
   */
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  @Output()
  onClick = new EventEmitter<Event>();
}
