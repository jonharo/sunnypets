import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/auth.service';

import { ReCaptchaComponent } from 'angular2-recaptcha';

@Component({
  selector: 'sp-signup',
  templateUrl: './landing-signup.component.html'
})
export class SignupComponent {
  signUpForm: FormGroup;
  captchaPassed: boolean = false;

  constructor(private _as: AuthService,
              private fb: FormBuilder,
              private router: Router) {

    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
    }, this.passwordMatchValidator);
  }

  signUpGoogle() {
    this._as.signUpGoogle();
  }

  signUpFacebook() {
    this._as.signUpFacebook();
  }

  signUpWithEmail(email, password) {
    this._as.signUpWithEmail(email, password)
  }

  onSubmit(form: FormGroup) {
    this.signUpWithEmail(form.get('email').value, form.get('password').value)
    console.dir(form);
  }

  passwordMatchValidator (form: FormGroup) {
    return form.get('password').value === form.get('passwordConfirm').value
      ? null : {'mismatch': true};
  }

  // @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  // handleCorrectCaptcha(response: string) {
  //   let token = this.captcha.getResponse();
  //   if (token) {
  //     this.captchaPassed = true;
  //   }
  //   return response;
  // }

}
