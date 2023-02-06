import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-info',
  templateUrl: './sidebar-info.component.html',
  styleUrls: ['./sidebar-info.component.scss'],
})
export class SidebarInfoComponent {
  sidebarItems: {
    group: string | null;
    children: {
      label: string;
      link: string;
      icon: string;
    }[];
  }[] = [
    {
      group: null,
      children: [
        {
          label: 'Home',
          link: '/',
          icon: '',
        },
      ],
    },
    {
      group: 'User Management',
      children: [
        {
          label: 'Users',
          link: '/users',
          icon: '',
        },
        {
          label: 'Roles and Permissions',
          link: '/roles-permissions',
          icon: '',
        },
      ],
    },
  ];
}
