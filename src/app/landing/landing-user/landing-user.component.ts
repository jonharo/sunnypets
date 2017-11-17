import { Component, OnInit } from '@angular/core';
import { StylesService } from '../../shared/services/styles.service';

@Component({
  selector: 'sp-user',
  templateUrl: './landing-user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private _ss: StylesService) {
    this._ss.style$.next('landing');
  }

  ngOnInit() {

  }

}
