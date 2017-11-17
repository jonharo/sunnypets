import { Component, OnInit } from '@angular/core';

import { PageScrollConfig } from "ng2-page-scroll";
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StylesService } from './shared/services/styles.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  consoleStyle = [
    'background: linear-gradient(#ffa726, #F45D01)',
    'size: 0px',
    'color: white',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold'
  ].join(';');

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private _ss: StylesService) {}

  ngOnInit() {
    console.log('%c Sunny Pets ', this.consoleStyle);

    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };

    this._ss.style$.subscribe(activeModule => {
      console.log(`Now on ${activeModule}`);
      switch (activeModule) {
        case 'landing':
          this._ss.loadStyleJQ('landing');
          this._ss.destroyStyleJQ('auth');
          break;
        case 'auth':
          this._ss.loadStyleJQ('auth');
          this._ss.destroyStyleJQ('landing');
      }
    })
  }
}
