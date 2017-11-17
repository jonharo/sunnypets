import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridSystemComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PanelsComponent } from './panels/panels.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';
import { TypographyComponent } from './typography/typography.component';

export const COMPONENTS_COMPONENTS = [
  ButtonsComponent,
  GridSystemComponent,
  IconsComponent,
  NotificationsComponent,
  PanelsComponent,
  SweetAlertComponent,
  TypographyComponent
];

export const COMPONENTS_ROUTES = RouterModule.forChild([{
  path: '',
    children: [{
      path: 'buttons',
        component: ButtonsComponent
    }, {
      path: 'grid',
        component: GridSystemComponent
    }, {
      path: 'icons',
        component: IconsComponent
    }, {
      path: 'notifications',
        component: NotificationsComponent
    }, {
      path: 'panels',
        component: PanelsComponent
    }, {
      path: 'sweet-alert',
        component: SweetAlertComponent
    }, {
      path: 'typography',
        component: TypographyComponent
    }
  ]}
]);
