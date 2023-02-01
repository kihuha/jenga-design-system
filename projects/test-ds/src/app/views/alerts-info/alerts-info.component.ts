import { Component } from '@angular/core';
import { TColors } from 'projects/test-ds/types';
import { rawWiddgetCode } from './widgets/widgetCodes';

@Component({
  selector: 'app-alerts-info',
  templateUrl: './alerts-info.component.html',
  styleUrls: ['./alerts-info.component.scss'],
})
export class AlertsInfoComponent {
  alertColors: { name: TColors; code: string }[] = [
    { name: 'primary', code: '#BF002D' },
    { name: 'secondary', code: '#B5007D' },
    { name: 'success', code: '#006C49' },
    { name: 'warning', code: '#FFDF9A' },
  ];
  activeColor = 0;

  rawCodes = rawWiddgetCode;
}
