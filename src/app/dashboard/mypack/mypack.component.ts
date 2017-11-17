import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';

import { Observable } from 'rxjs/Observable';
import { Pet } from '../../shared/interfaces/Pet';

@Component({
  selector: 'sp-dashboard-mypack',
  templateUrl: './mypack.component.html'
})
export class MyPackComponent implements OnInit {
  pets: Observable<Pet[]>;

  constructor(private _as: AuthService,
              private _fs: FirebaseService) { }

  ngOnInit() {
    this._as.getUserFb$()
      .subscribe(user => {
        this.pets = this._fs.getPetCollection(user).valueChanges();
      })
  }
}
