import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

export const APP_COMPONENTS = [
  AppComponent
];

export const APP_ROUTES = RouterModule.forRoot([{
    path: '',
      loadChildren: './landing/landing.module#LandingModule',
  }, {
    path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
  },  {
    path: '**',
      redirectTo: 'signup',
}]);
