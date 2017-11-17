import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'sp-landing-nav',
  templateUrl: './landing-nav.component.html'
})

export class LandingNavComponent implements OnInit {
  user = null;

  signOut() {
    this._as.signOut();
  }

  constructor(private _as: AuthService) {}

  ngOnInit() {
    this._as.getUserFb$().subscribe(user => this.user = user);
  }

}
