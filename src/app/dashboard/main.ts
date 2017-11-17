import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DashboardModule } from './dashboard.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(DashboardModule);
