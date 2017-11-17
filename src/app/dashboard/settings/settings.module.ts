import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutes } from './settings.routes';

import { SettingsComponent } from './settings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SettingsRoutes),
  ],
  declarations: [SettingsComponent]
})

export class SettingsModule {}
