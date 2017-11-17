import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/auth/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';

import swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';

import { PetParent } from '../../shared/interfaces/PetParent';

declare let $ :any;

@Component({
  moduleId: module.id,
  selector: 'sp-dashboard-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, AfterViewInit {
  user$: Observable<PetParent>;

  contactInfoForm: FormGroup;
  ecForm: FormGroup;

  createForms() {
    this.contactInfoForm = this.fb.group({
      firstName:      ['', [Validators.required, Validators.minLength(2)]],
      lastName:       ['', [Validators.required, Validators.minLength(2)]],
      email:          ['', [Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*')]],
      mobilePhone:    ['', [Validators.required, Validators.minLength(10)]],
      streetAddress:  ['', Validators.required],
      neighborhood:   ['', Validators.required],
      zipCode:        ['', [Validators.required, Validators.minLength(5)]]
    });

    this.ecForm = this.fb.group({
      ec1Name:     ['', [Validators.required, Validators.minLength(2)]],
      ec1Relation: ['', Validators.required],
      ec1Phone:    ['', [Validators.required, Validators.minLength(10)]],
      ec2Name:     [''],
      ec2Relation: [''],
      ec2Phone:    [''],
      ec3Name:     [''],
      ec3Relation: [''],
      ec3Phone:    ['']
    })
  }

  updateForm(path: string, form: FormGroup) {

    swal({
      title: "Updated",
      type: "success"
    }).then(() => {
      // const contactInfo: ContactInfo = {
      //   firstName: form.get('firstName').value,
      //   lastName: form.get('lastName').value,
      //   email: form.get('email').value,
      //   mobilePhone: form.get('mobilePhone').value,
      //   streetAddress: form.get('streetAddress').value,
      //   neighborhood: form.get('neighborhood').value,
      //   zipCode: form.get('zipCode').value
      // };

      // Update User Contact Info
      this._as.getUserFb$()
        .subscribe(user => {
          this._fs.getFsUserDoc(user)
            .update({[path]: form.value})
            .catch(err => console.error(err))
        });
    });
  }

  constructor(private _as: AuthService,
              private _fs: FirebaseService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.createForms();

    this.user$ = this._fs.getUserFs$();

    this._as.userFb$
      .subscribe(user => {
        this._fs.getFsUserDoc(user)
          .valueChanges()
          .subscribe((doc) => {
            for (let [key, value] of (<any>Object).entries(doc.contactInfo)) {
              this.contactInfoForm.patchValue({[key]: value});
            }
            for (let [key, value] of (<any>Object).entries(doc.emergencyContacts)) {
              this.ecForm.patchValue({[key]: value});
            }
          });
      });
  }

  ngAfterViewInit() {
    $.material.options.autofill = true;
    $.material.init();
  }
}
