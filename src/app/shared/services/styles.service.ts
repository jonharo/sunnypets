import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

declare const $: any;

@Injectable()
export class StylesService {
  public style$: Subject<any> = new Subject();

  loadStyleJQ(style: string) {
    $('head').append(`<link rel="stylesheet" name="${style}" href="${style}.bundle.css" type="text/css" />`);
    console.log(`loadStyle(${style})`);
  }

  //TODO: Detect whether auth style is on page before destroying style
  destroyStyleJQ(styleId: string) {
    $(`link[name='${styleId}']`).remove();
    console.log(`destroyStyle(${styleId})`);
  }

  constructor() {}

}
