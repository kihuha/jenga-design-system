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

  buttonColors: { name: string; code: string }[] = [
    { name: 'Primary', code: '#BF002D' },
    { name: 'Secondary', code: '#B5007D' },
    { name: 'Success', code: '#006C49' },
    { name: 'Warning', code: '#FFDF9A' },
  ];
  activeColor = 0;
}
