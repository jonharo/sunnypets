import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { StylesService } from '../services/styles.service';
import { FirebaseService } from '../services/firebase.service';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState
      .take(1)
        .map(authState => !!authState)
          .do(authenticated => {
            this._as.getUserFb$()
              .subscribe(user => {
                this._fs.isProfileComplete(user)
                  .subscribe(complete => {
                    if (!authenticated) {
                      this.router.navigate([`signin`])
                        .catch(err => console.error(err));
                    } else if (!!authenticated && !complete) {
                      this._ss.style$.next('auth');
                      console.log(`Profile incomplete`);
                      this.router.navigate([`dashboard/complete-profile`])
                        .catch(err => console.error(err));
                    } else {
                      this._ss.style$.next('auth');
                      console.log(`Profile complete`);
                      return true
                    }
                  },err => console.error(err))
               });
          });

  }

  constructor(
      private afAuth: AngularFireAuth,
      private router: Router,
      private _as: AuthService,
      private _fs: FirebaseService,
      private _ss: StylesService) {}
}
