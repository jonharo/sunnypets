import { Component, OnInit } from '@angular/core';

import { Promo } from './promo';

@Component({
  selector: 'sp-landing-promo',
  templateUrl: './landing-promo.component.html'
})
export class LandingPromoComponent implements OnInit {
  // Halloween
  // pageTitleLn1: string = 'Happy';
  // pageTitleLn2: string = 'Howl-o-ween';
  // pageSubHeading: string = 'All treats no tricks!';

  pageTitleLn1: string = 'Happy';
  pageTitleLn2: string = 'Thanksgiving';
  pageSubHeading: string = '';

  promos: Array<Promo> = [
    {
      "size" : 6,
      "imgUrl" : "../assets/img/promo/dogs-car_reduced.jpg",
      "title": "Bark at the Park",
      "heading": "20% Off Park Visit",
      "blurb": "Let them run and romp around with their four legged buddies until they're dog tired",
      "linkUrl": "signup",
      "icon": "",
      "linkText": "Book"
    },
    {
      "size" : 6,
      "imgUrl" : "../assets/img/promo/charlotte_reduced.jpg",
      "title": "Week of Wags",
      "heading": "15% off Week of Walks",
      "blurb": "Get an entire week discounted when you sign up for five or more visits in one week",
      "linkUrl": "signup",
      "icon": "",
      "linkText": "Book"
    },
    {
      "size" : 6,
      "imgUrl" : "../assets/img/promo/thanksgiving/Fall_pets_reduced.jpg",
      "title": "Jive Turkey",
      "heading": "20% off Pet Sitting",
      "blurb": "Time to give thanks for discounts on any services including boarding, cat sitting, and dog walks during Thankgiving week",
      "linkUrl": "signup",
      "icon": "",
      "linkText": "Book"
    },
    {
      "size" : 6,
      "imgUrl" : "../assets/img/promo/toby-boarding_reduced.jpg",
      "title": "Fur Baby Vaca",
      "heading": "20% off Boarding",
      "blurb": "Big plans for the weekend? Treat your fur baby to a getaway as well! No cages, No kennels, daily trip to the park or beach",
      "linkUrl": "signup",
      "icon": "",
      "linkText": "Book"
    },
    {
      "size" : 6,
      "imgUrl" : "../assets/img/promo/ruby_reduced.jpg",
      "title": "Month of Wags",
      "heading": "20% off Month of Walks",
      "blurb": "Get an entire month discounted when you sign up for 16 visits or more in a month",
      "linkUrl": "signup",
      "icon": "",
      "linkText": "Book"
    },
    {
      "size" : 6,
      "imgUrl" : "../assets/img/promo/halloween/trick-or-treat_reduced.jpg",
      "title": "Spooky Pooch",
      "heading": "20% off Any Service",
      "blurb": "Big plans for the spooky weekend? Party guilt free knowing we're taking care of your little one",
      "linkUrl": "signup",
      "icon": "",
      "linkText": "Book"
    },
  ];

  // promoSize: number = 4;
  // promoImgUrl: string = '../assets/img/promo/halloween/trick-or-treat.jpg';
  // promoTitle: string;
  // promoHeading: string;
  // promoBlurb: string;

  constructor() {}

  ngOnInit() {
  }

}
