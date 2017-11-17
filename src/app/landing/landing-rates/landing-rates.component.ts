import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-landing-rates',
  templateUrl: './landing-rates.component.html'
})
export class LandingRatesComponent implements OnInit {
  actionLink = '/signup';
  actionText = 'Book Today';

  constructor() { }

  ngOnInit() {
  }

}
