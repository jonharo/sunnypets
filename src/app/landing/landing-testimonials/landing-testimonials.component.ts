import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IParallaxScrollConfig } from 'ng2-parallaxscroll';

import { yelpReview } from "./yelpReview.interface";

@Component({
  selector: 'sp-landing-testimonials',
  templateUrl: './landing-testimonials.component.html'
})
export class LandingTestimonialsComponent implements OnInit {
  //FIXME: Replace low quality image and fix parallax so that image never shows border
  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: .5,
    initialValue: -200,
    cssUnit: 'px'
  };

  reviews: Array<yelpReview>;
  defaultAvatar: string = "https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/testimonials/yelp')
      .subscribe(data => {
        this.reviews = data["jsonBody"]["reviews"];
      })
  }

}
