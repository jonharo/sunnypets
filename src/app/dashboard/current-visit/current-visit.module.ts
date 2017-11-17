import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CurrentVisitRoutes } from './current-visit.routes';

import { CurrentVisitComponent } from './current-visit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CurrentVisitRoutes)
  ],
  declarations: [
    CurrentVisitComponent
  ]
})

export class CurrentVisitModule {}
