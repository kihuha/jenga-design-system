import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TColors = 'primary' | 'secondary' | 'warning' | 'success';
export type TButtonSizes = 'sm' | 'md' | 'lg';

@Component({
  selector: 'jenga-button',
  templateUrl: './button.component.html',
})
export class Button {
  /**
   * Button type
   *
   * can either be elevated, filled, tonal, outlined, text
   * @default text
   */
  @Input()
  type: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text' = 'text';

  /**
   * Button color
   *
   * can either be 'primary' 'secondary' 'tertiary' 'error' 'warning' 'success' or a valid hex code
   * @default primary
   */
  @Input()
  color: TColors = 'primary';

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
