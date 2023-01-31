import { Component, Input } from '@angular/core';

@Component({
  selector: 'jenga-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class Alert {
  @Input()
  type: 'filled' | 'tonal' = 'filled';
}
