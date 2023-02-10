import { Component, Input } from '@angular/core';

@Component({
  selector: 'jenga-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class Alert {
  @Input()
  type: 'filled' | 'tonal' = 'filled';

  @Input()
  color: 'primary' | 'secondary' | 'warning' | 'success' = 'primary';
}
