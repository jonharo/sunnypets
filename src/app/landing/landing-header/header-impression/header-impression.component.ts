import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-header-impression',
  templateUrl: './header-impression.component.html'
})
export class HeaderImpressionComponent implements OnInit {
  title: string = "Pets are People too";
  blurb: string = "Just like their hooman, your furry friend would love to go out and hang with their buddies at the park or walk around the neighborhood and explore";
  buttonText: string = "Sign Up Today";
  buttonLink: string = "/signup";

  constructor() { }

  ngOnInit() {
  }

}
