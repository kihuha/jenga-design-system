import { Component, EventEmitter, Input, Output } from '@angular/core';

interface IRouteChild {
  routerLink: string;
  permission?: string;
  title: string;
  'data-testid'?: string;
}

interface IRouteParent {
  routerLink?: string;
  icon: any;
  title: string;
  'data-testid'?: string;
  children?: IRouteChild[];
}
@Component({
  selector: 'jenga-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class Sidebar {
  @Input()
  sidebarItems: IRouteParent[] = [];

  @Output()
  routeChange = new EventEmitter();

  openItems: number[] = [];
  activeParent: string = '';
  activeChild: string = '';

  ngOnInit() {
    this.activeParent = this.sidebarItems[0].title;
  }

  toggleOpenItems(id: number) {
    const indexInArr = this.openItems.indexOf(id);

    if (indexInArr > -1) {
      this.openItems.splice(indexInArr, indexInArr + 1);
    } else {
      this.openItems.push(id);
    }
  }

  handleRouteChange(parent: IRouteParent, child: IRouteChild | null = null) {
    this.activeParent = parent.title;

    if (child) {
      this.activeChild = child.title;
      this.routeChange.emit(child.routerLink);
    } else {
      this.routeChange.emit(parent.routerLink);
    }
  }
}
