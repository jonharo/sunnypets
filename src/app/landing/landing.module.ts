import { NgModule } from '@angular/core';

import { LANDING_COMPONENTS, LANDING_ROUTES } from "./landing.routes";
import { SafeStylePipe } from './landing-promo/safe-style.pipe';
import { SafeHtmlPipe } from './landing-promo/safe-html.pipe';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

@NgModule({
  declarations: [
    LANDING_COMPONENTS,
    SafeStylePipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LANDING_ROUTES,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0CgFbCF9vWgD7Aojtx56U59vTo1R-NTw'
    }),
    Ng2PageScrollModule,
    ParallaxScrollModule
  ],
  providers: [],
  schemas: [],
  bootstrap: []
})

export class LandingModule { }
