import { Component } from '@angular/core';
import { rawWiddgetCode } from './widgets/widgetCodes';

@Component({
  selector: 'app-alerts-info',
  templateUrl: './alerts-info.component.html',
  styleUrls: ['./alerts-info.component.scss'],
})
export class AlertsInfoComponent {
  alertColors: any[] = ['primary', 'secondary', 'success', 'warning'];
  activeColor = 0;

  rawCodes = rawWiddgetCode;
}
