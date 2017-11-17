import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { ErrorService } from './error.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AccountLogService {
  public log(action: string) {
    const date = new Date();
    const dayWrapper = moment(date).format('YYYY MM DD, h:mm:ss a');
    this.afAuth.authState.subscribe(user => {
      this.afs.collection(`petParents/${user.uid}/accountLogs`)
        .doc(dayWrapper)
        .set({ 'time': date, action })
        .then(() => console.log(`Logged: ${action}`))
        .catch(err => this._es.handleError(err));
    })
  }

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private _es: ErrorService) {}

}
