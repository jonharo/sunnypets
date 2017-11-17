import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar.routes';

import { AuthService } from '../../shared/auth/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';

import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit{
  public menuItems: any[];

  petParentPhoto: string;
  petParentDisplayName: string;

  logOut() {
    this._as.signOut();
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  constructor (private _as: AuthService,
               private _fs: FirebaseService) {}

  ngOnInit() {
    this._fs.getUserFs$()
      .subscribe((petParent) => {
        this.petParentPhoto = petParent.photoURL || '/assets/img/default-avatar.png';
        this.petParentDisplayName = `${petParent.contactInfo.firstName} ${petParent.contactInfo.lastName}`;
      }
    );

    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  updatePS(): void  {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
    }
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
