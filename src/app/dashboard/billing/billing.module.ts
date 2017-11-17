import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BillingRoutes } from './billing.routes';

import { BillingComponent } from './billing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BillingRoutes),
  ],
  declarations: [
    BillingComponent
  ]
})
export class BillingModule { }
