import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [{
  path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
}, {
//   // FIXME: My Pack Route
  path: '/dashboard/mypack',
    title: 'My Pack',
    type: 'link',
    icontype: 'pets'
}, {
  path: '/dashboard/schedule',
    title: 'Schedule',
    type: 'link',
    icontype: 'date_range'
}, {
  path: '/dashboard/currentvisit',
    title: 'Current Visit',
    type: 'link',
    icontype: 'place'
}, {
  path: '/dashboard/billing',
    title: 'Billing',
    type: 'link',
    icontype: 'credit_card'
}
//, {
//   path: '/components',
//   title: 'Components',
//   type: 'sub',
//   icontype: 'apps',
//   children: [
//     {path: 'buttons', title: 'Buttons', ab:'B'},
//     {path: 'grid', title: 'Grid System', ab:'GS'},
//     {path: 'panels', title: 'Panels', ab:'P'},
//     {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
//     {path: 'notifications', title: 'Notifications', ab:'N'},
//     {path: 'icons', title: 'Icons', ab:'I'},
//     {path: 'typography', title: 'Typography', ab:'T'}
//   ]
// }, {
//   path: '/forms',
//   title: 'Forms',
//   type: 'sub',
//   icontype: 'content_paste',
//   children: [
//     {path: 'regular', title: 'Regular Forms', ab:'RF'},
//     {path: 'extended', title: 'Extended Forms', ab:'EF'},
//     {path: 'validation', title: 'Validation Forms', ab:'VF'},
//     {path: 'wizard', title: 'Wizard', ab:'W'}
//   ]
// },{
//   path: '/tables',
//   title: 'Tables',
//   type: 'sub',
//   icontype: 'grid_on',
//   children: [
//     {path: 'regular', title: 'Regular Tables', ab:'RT'},
//     {path: 'extended', title: 'Extended Tables', ab:'ET'},
//     {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
//   ]
// },{
//   path: '/maps',
//   title: 'Maps',
//   type: 'sub',
//   icontype: 'place',
//   children: [
//     {path: 'google', title: 'Google Maps', ab:'GM'},
//     {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
//     {path: 'vector', title: 'Vector Map', ab:'VM'}
//   ]
// },{
//   path: '/widgets',
//   title: 'Widgets',
//   type: 'link',
//   icontype: 'widgets'
//
// },{
//   path: '/charts',
//   title: 'Charts',
//   type: 'link',
//   icontype: 'timeline'
//
// },{
//   path: '/calendar',
//   title: 'Calendar',
//   type: 'link',
//   icontype: 'date_range'
// },{
//   path: '/pages',
//   title: 'Pages',
//   type: 'sub',
//   icontype: 'image',
//   children: [
//     {path: 'pricing', title: 'Pricing', ab:'P'},
//     {path: 'timeline', title: 'Timeline Page', ab:'TP'},
//     {path: 'login', title: 'Login Page', ab:'LP'},
//     {path: 'register', title: 'Register Page', ab:'RP'},
//     {path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
//     {path: 'user', title: 'User Page', ab:'UP'}
//   ]
// }
];
