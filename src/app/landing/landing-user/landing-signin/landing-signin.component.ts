import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from "../../../shared/auth/auth.service";

@Component({
  selector: 'sp-signin',
  templateUrl: './landing-signin.component.html'
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private _as: AuthService,
              private fb: FormBuilder) {
    this.signInForm = this.fb.group({
        email:    ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    );
  }

  signInGoogle() {
    this._as.signInGoogle();
  }

  signInFacebook() {
    this._as.signInFacebook()
  }

  signInTwitter() {
    this._as.signInTwitter()
  }

  signInWithEmail(email, password) {
    this._as.signInWithEmail(email, password)
  }

  onSubmit(form: FormGroup) {
    this.signInWithEmail(form.get('email').value, form.get('password').value)
  }

  ngOnInit() {
  }

}
