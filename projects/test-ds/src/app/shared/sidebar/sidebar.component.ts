import { Component } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

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
