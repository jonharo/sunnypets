import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutes } from './profile.routes';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProfileRoutes),
  ],
  declarations: [ProfileComponent]
})

export class ProfileModule {}
