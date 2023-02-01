import { Component } from '@angular/core';
import { TColors } from 'projects/test-ds/types';

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

  buttonColors: { name: TColors; code: string }[] = [
    { name: 'primary', code: '#BF002D' },
    { name: 'secondary', code: '#B5007D' },
    { name: 'success', code: '#006C49' },
    { name: 'warning', code: '#FFDF9A' },
  ];
  activeColor = 0;
}
