import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { VuelosComponent } from '../../vuelos/vuelos.component';
import { HotelesComponent } from '../../hoteles/hoteles.component';
import { VehiculosComponent } from '../../vehiculos/vehiculos.component';
import { MapsComponent } from '../../maps/maps.component';
import { PaquetesComponent } from '../../paquetes/paquetes.component';
import {RallyComponent} from '../../rallys/rallys.component';
//import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    VuelosComponent,
    HotelesComponent,
    VehiculosComponent,
    MapsComponent,
    PaquetesComponent,
    RallyComponent,
    //UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
