import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector[colorList]',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent {
  @Input()
  colorList: { name: string; code: string }[] = [];

  @Input()
  activeColor: number = 0;

  @Output()
  selectedColorEvent = new EventEmitter();
}
