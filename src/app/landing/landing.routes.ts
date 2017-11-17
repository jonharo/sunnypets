import { RouterModule } from "@angular/router";

import { LandingComponent } from "./landing.component";
import { HeaderImpressionComponent } from "./landing-header/header-impression/header-impression.component";
import { LandingNavComponent } from "./landing-nav/landing-nav.component";
import { LandingHeaderComponent } from "./landing-header/landing-header.component";
import { UserComponent } from "./landing-user/landing-user.component";
import { SigninComponent } from "./landing-user/landing-signin/landing-signin.component";
import { SignupComponent } from "./landing-user/landing-signup/landing-signup.component";
import { ApplyComponent } from "./landing-user/landing-apply/landing-apply.component";
import { LandingFeaturesComponent } from "./landing-features/landing-features.component";
import { LandingTeamComponent } from "./landing-team/landing-team.component";
import { LandingRatesComponent } from "./landing-rates/landing-rates.component";
import { LandingTestimonialsComponent } from "./landing-testimonials/landing-testimonials.component";
import { LandingQuoteComponent } from "./landing-quote/landing-quote.component";
import { LandingFooterComponent } from "./landing-footer/landing-footer.component";
import { LandingPromoComponent } from './landing-promo/landing-promo.component';
import { PromoAlertBarComponent } from './landing-promo/promo-alert-bar/promo-alert-bar.component';

export const LANDING_COMPONENTS = [
  LandingComponent,
  LandingNavComponent,
  LandingHeaderComponent,
  HeaderImpressionComponent,
  UserComponent,
  SignupComponent,
  SigninComponent,
  ApplyComponent,
  LandingFeaturesComponent,
  LandingTeamComponent,
  LandingRatesComponent,
  LandingTestimonialsComponent,
  LandingQuoteComponent,
  LandingFooterComponent,
  LandingPromoComponent,
  PromoAlertBarComponent
];

export const LANDING_ROUTES = RouterModule.forChild([{
    path: '',
      component: LandingComponent,
      children: [{
          path: '',
            component: HeaderImpressionComponent
        }, {
          path: 'features',
            component: HeaderImpressionComponent
        }, {
          path: 'team',
            component: HeaderImpressionComponent
        }, {
          path: 'rates',
            component: HeaderImpressionComponent
        }, {
          path: 'testimonials',
            component: HeaderImpressionComponent
        }, {
          path: 'quote',
            component: HeaderImpressionComponent
        }]
  }, {
    path: 'signup',
      component: UserComponent,
      children: [{
        path: '',
        component: SignupComponent
      }]
  }, {
    path: 'signin',
      component: UserComponent,
      children: [{
        path: '',
        component: SigninComponent
      }]
  }, {
    path: 'promotions',
      component: LandingPromoComponent,
  }, {
    path: 'apply',
      component: UserComponent,
      children: [{
      path: '',
      component: ApplyComponent
    }]
  }
]);
