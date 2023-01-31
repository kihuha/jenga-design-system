import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarLinks = [
    {
      name: 'Introduction',
      link: '',
    },
    {
      index: 1,
      name: 'Installation',
      link: '/installation',
    },
    {
      name: 'Alerts',
      link: '/alerts',
    },
    {
      name: 'Buttons',
      link: '/buttons',
    },
  ];

  currentUrl!: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.currentUrl = this.activatedRoute.url.pipe(
      map((url) => {
        console.log(url[0].path);

        return url[0].path;
      })
    );
  }
}
