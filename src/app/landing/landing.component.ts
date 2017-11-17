import { Component } from '@angular/core';
import { StylesService } from '../shared/services/styles.service';

@Component({
  selector: 'sp-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(private _ss: StylesService) {
    this._ss.style$.next('landing');
  }
}
