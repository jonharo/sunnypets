import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { WizardLayoutComponent } from './layouts/wizard/wizard-layout.component';

import { DASHBOARD_COMPONENTS, DASHBOARD_ROUTES } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    WizardLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DASHBOARD_COMPONENTS,
    DASHBOARD_ROUTES
  ],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule { }
