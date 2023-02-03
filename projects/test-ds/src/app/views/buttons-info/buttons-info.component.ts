import { Component } from '@angular/core';
import { TButtonSizes, TColors } from 'projects/test-ds/types';

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
  buttonColors: TColors[] = ['primary', 'secondary', 'success', 'warning'];
  buttonSizes: TButtonSizes[] = ['sm', 'md', 'lg'];
  activeColor = 0;

  rawCode: string[] = [
    `
  ...
    <div class="mt-5">
    <jenga-button color="primary" type="filled">
      <span>Talk to Sales</span>
      <span class="material-symbols-outlined">arrow_right_alt</span>
    </jenga-button>
  </div>
  ...
    `,
    `
    ...
      <div class="flex items-center justify-end gap-5 mt-5">
        <jenga-button color="primary" type="text"> Cancel </jenga-button>
        <jenga-button color="primary" type="filled">
          Yes, Delete User
        </jenga-button>
      </div>
    ...
    `,
  ];
}
