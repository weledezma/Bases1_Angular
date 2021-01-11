import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { VuelosComponent } from '../../vuelos/vuelos.component';
import { HotelesComponent } from '../../hoteles/hoteles.component';
import { VehiculosComponent } from '../../vehiculos/vehiculos.component';
import { MapsComponent } from '../../maps/maps.component';
import { PaquetesComponent } from '../../paquetes/paquetes.component';
import { RallyComponent } from '../../rallys/rallys.component'
//import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'vuelos',         component: VuelosComponent },
    { path: 'hoteles',        component: HotelesComponent },
    { path: 'vehiculos',      component: VehiculosComponent },
    { path: 'paquetes',       component: PaquetesComponent },
    { path:  'rallys',         component: RallyComponent},
    { path: 'maps',           component: MapsComponent },
    
    //{ path: 'upgrade',        component: UpgradeComponent },
];
