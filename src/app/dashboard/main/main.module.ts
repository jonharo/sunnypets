import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';

import { MAIN_ROUTES } from './main.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MAIN_ROUTES
  ],
  declarations: [ MainComponent ]
})

export class MainModule {}
