import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyPackRoutes } from './mypack.routes';

import { MyPackComponent } from './mypack.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyPackRoutes),
  ],
  declarations: [
    MyPackComponent
  ]
})
export class MyPackModule { }
