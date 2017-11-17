import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LandingModule } from "./landing/landing.module";
import { SharedModule } from './shared/shared.module';
import { APP_COMPONENTS, APP_ROUTES } from "./app.routes";

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'firebase/storage';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    LandingModule,
    SharedModule,
    APP_ROUTES,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics], {
      developerMode: true,
      pageTracking: {
        clearIds: true,
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    SweetAlert2Module.forRoot(),
    MomentModule
  ],
  declarations: [APP_COMPONENTS],
  bootstrap: [APP_COMPONENTS]
})

export class AppModule { }
