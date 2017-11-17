import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ng2-parallaxscroll';

declare const $: any;

@Component({
  selector: 'sp-landing-header',
  templateUrl: './landing-header.component.html'
})
export class LandingHeaderComponent implements OnInit {
  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: .5,
    cssUnit: 'px'
  };

  constructor() {}

  ngOnInit() {
    $.material.init();
  }

}
