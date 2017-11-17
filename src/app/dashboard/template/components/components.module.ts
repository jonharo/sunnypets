import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { COMPONENTS_COMPONENTS, COMPONENTS_ROUTES } from './components.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    COMPONENTS_ROUTES
  ],
  declarations: [
    COMPONENTS_COMPONENTS
  ]
})

export class ComponentsModule {}
