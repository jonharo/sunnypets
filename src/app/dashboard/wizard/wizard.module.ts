import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WIZARD_ROUTES } from './wizard.routes';

import { WizardComponent } from './wizard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WIZARD_ROUTES
  ],
  declarations: [
    WizardComponent
  ]
})

export class WizardModule {}
