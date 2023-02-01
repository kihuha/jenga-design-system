import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TColors } from 'projects/test-ds/types';

@Component({
  selector: 'jenga-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
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
