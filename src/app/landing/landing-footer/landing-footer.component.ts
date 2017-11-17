import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-landing-footer',
  templateUrl: './landing-footer.component.html'
})
export class LandingFooterComponent implements OnInit {
  public currentYear = new Date().getFullYear();

  public insta: string = "http://www.instagram.com/sunnypets";
  public twitter: string = "http://www.twitter.com/sunnypetssd";
  public yelp: string = "http://www.yelp.com/biz/sunny-pets-san-diego";

  public madeBy: string = "http://www.elvnthaus.com";

  constructor() { }

  ngOnInit() {
  }

}
