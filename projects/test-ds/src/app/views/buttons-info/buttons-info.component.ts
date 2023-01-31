import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-info',
  templateUrl: './buttons-info.component.html',
  styleUrls: ['./buttons-info.component.scss'],
})
export class ButtonsInfoComponent {
  buttons: { type: 'elevated' | 'filled' | 'text' | 'tonal' | 'outlined' }[] = [
    {
      type: 'elevated',
    },
    {
      type: 'filled',
    },
    {
      type: 'text',
    },
    {
      type: 'tonal',
    },
    {
      type: 'outlined',
    },
  ];
}
