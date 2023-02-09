import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarLinks = [
    {
      name: 'Introduction',
      link: '/',
    },
    {
      index: 1,
      name: 'Installation',
      link: '/installation',
    },
    {
      name: 'Accordion',
      link: '/accordion',
    },
    {
      name: 'Alerts',
      link: '/alerts',
    },
    {
      name: 'Buttons',
      link: '/buttons',
    },
    {
      name: 'TextField',
      link: '/textfield',
    },
    {
      name: 'Sidebar',
      link: '/sidebar',
    },
    {
      name: 'Data Table',
      link: '/datatable',
    },
  ];

  url: any;

  constructor(private router: Router) {
    this.url = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.url = event.url;
      }
    });
  }
}
