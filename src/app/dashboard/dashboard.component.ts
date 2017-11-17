import { Component, OnInit, ElementRef } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sp-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  constructor(private elRef:ElementRef) {}

  ngOnInit(){
    $.material.init();
    const body = document.getElementsByTagName('body')[0];
    const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      body.classList.add('perfect-scrollbar-on');
    } else {
      body.classList.add('perfect-scrollbar-off');
    }
    $.material.init();
  }
}
