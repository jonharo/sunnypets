import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

export const MAIN_ROUTES = RouterModule.forChild([{
    path: '',
      children: [{
        path: '',
        component: MainComponent
      }]
}]);
