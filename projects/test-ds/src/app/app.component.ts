import { Component } from '@angular/core';
import hexToHsl from './utils/hexToHsl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-ds';

  activeIndex = 3;
  sidebarLinks = [
    {
      name: 'Introduction',
    },
    {
      name: 'Installation',
    },
    {
      name: 'Alerts',
    },
    {
      name: 'Buttons',
    },
  ];

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

  handleThemeChange(color: any) {
    const hsl = hexToHsl(color.replace('#', ''));

    const html = document.querySelector('html') as HTMLElement;
    html.style.setProperty('--btn-main-color-hue', `${hsl[0]}`);
    html.style.setProperty('--btn-main-color-saturation', `${hsl[1]}%`);
    html.style.setProperty('--btn-main-color-lightness', `${hsl[2]}%`);
  }
}
