import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FirebaseService } from './services/firebase.service';
import { StylesService } from './services/styles.service';
import { ErrorService } from './services/error.service';
import { AccountLogService } from './services/account-log.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FirebaseService,
    StylesService,
    ErrorService,
    AccountLogService
  ]
})

export class SharedModule {}
