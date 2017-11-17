import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sp-promo-alert-bar',
  templateUrl: './promo-alert-bar.component.html'
})
export class PromoAlertBarComponent implements OnInit, AfterViewInit {
  iconLeft: string;
  iconLeftUrl: string;
  iconRight: string;
  iconRightUrl: string;
  alertText: string;

  setIcons(holiday, iconLeft, iconRight) {
    this.iconLeft = iconLeft;
    this.iconLeftUrl = `assets/img/promo/${holiday}/${iconLeft}.svg`;
    this.iconRight = iconRight;
    this.iconRightUrl = `assets/img/promo/${holiday}/${iconRight}.svg`;
  }

  constructor() {
    this.setIcons('thanksgiving', 'leaves', 'turkey');
    this.alertText = "Check out our Holiday Promotions";
  }

  ngOnInit() {}

  ngAfterViewInit() {
    $('a.promo-text')
      .hover(
        function() {
          $(this).addClass('animated flash infinite')
        },
        function() {
          $(this).removeClass('animated flash infinite')
        });


    $('img#pumpkin')
      .hover(
        function() {
          $(this).addClass('animated wobble infinite')
        }, function() {
          $(this).removeClass('animated wobble infinite')
        });

    $('img#ghost')
      .hover(
        function() {
          $(this).addClass('animated flash infinite')
        },
        function() {
          $(this).removeClass('animated flash infinite')
        });

    $('img#leaves')
      .hover(
        function() {
          $(this).addClass('animated tada infinite')
        }, function() {
          $(this).removeClass('animated tada infinite')
        });

    $('img#turkey')
      .hover(
        function() {
          $(this).addClass('animated wobble infinite')
        },
        function() {
          $(this).removeClass('animated wobble infinite')
        });
  }

}
