import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

import { PetParent } from '../interfaces/PetParent';
import { AccountLog } from '../interfaces/AccountLog';
import { Pet } from '../interfaces/Pet';

@Injectable()
export class FirebaseService implements OnInit {
  petParentsCollection: AngularFirestoreCollection<PetParent>;
  petParents$: Observable<PetParent[]>;
  userAccountLogCollection: AngularFirestoreCollection<AccountLog>;
  userAccountLogs$: Observable<AccountLog[]>;
  userFsDoc: AngularFirestoreDocument<PetParent>;
  userFs$: Observable<PetParent>;
  userPetCollection: AngularFirestoreCollection<Pet>;
  userPets$: Observable<{}[]>;

  getAccountLogCollection(user): AngularFirestoreCollection<AccountLog> {
    this.userAccountLogCollection = this.afs.collection(`petParents/${user.uid}/accountLogs`);
    return this.userAccountLogCollection;
  }

  getFsUserDoc(user): AngularFirestoreDocument<PetParent> {
    this.userFsDoc = this.afs.doc(`petParents/${user.uid}`);
    return this.userFsDoc;
  }

  getUserFs$() {
    this.userFs$ = this.userFsDoc.valueChanges();
    return this.userFs$;
  }

  getPetCollection(user) {
    this.userPetCollection = this.afs.collection(`petParents/${user.uid}/pets`);
    return this.userPetCollection;
  }

  getUserPets$(user) {
    this.userPets$ = this.afs.collection(`petParents/${user.uid}/pack`).valueChanges();
    return this.userPets$;
  }

  userExists(user): Observable<boolean> {
    return this.getFsUserDoc(user)
      .snapshotChanges()
      .map((action) => {
        return !!action.payload.exists
      });
  }

  isProfileComplete(user): Observable<boolean> {
    const cInfo = {
      firstName: null,
      lastName: null,
      streetAddress: null,
      zipCode: null,
      neighborhood: null,
      mobilePhone: null,
      email: null
    };

    return this.getFsUserDoc(user)
      .valueChanges()
      .map((doc) => {
        let aKeys = Object.keys(doc.contactInfo).sort();
        let bKeys = Object.keys(cInfo).sort();
        return (JSON.stringify(aKeys) === JSON.stringify(bKeys));
      })
  }

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      // Create User Doc
      this.userFsDoc = this.afs.doc(`petParents/${user.uid}`);
      this.userFs$ = this.userFsDoc.valueChanges();

      // Create Pack Collection within User Doc
      this.userPetCollection = this.afs.collection(`petParents/${user.uid}/pets`);
      this.userPets$ = this.userPetCollection.valueChanges();

      // Create Pack Collection within User Doc
      this.userAccountLogCollection = this.afs.collection(`petParents/${user.uid}/accountLogs`);
      console.log(this.userAccountLogCollection);
      this.userAccountLogs$ = this.userAccountLogCollection.valueChanges();
    });

    this.petParentsCollection = this.afs.collection('petParents');
    this.petParents$ = this.petParentsCollection.valueChanges();
  }

}
