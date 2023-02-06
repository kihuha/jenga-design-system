import { Component, Input } from '@angular/core';

@Component({
  selector: 'jenga-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class Sidebar {
  @Input()
  sidebarItems: {
    group: string | null;
    children: {
      label: string;
      link: string;
      icon: string;
    }[];
  }[] = [];
}
