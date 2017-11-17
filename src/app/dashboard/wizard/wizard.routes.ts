import { RouterModule } from '@angular/router';

import { WizardComponent } from './wizard.component';

export const WIZARD_ROUTES = RouterModule.forChild([{
  path: '',
    component: WizardComponent
}]);
