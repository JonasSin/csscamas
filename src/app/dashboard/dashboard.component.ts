import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Login1Component } from '../login-1/login-1.component';
import { PisosComponent } from '../pisos/pisos.component';
import { SalasComponent } from '../salas/salas.component';
import { CamasComponent } from '../camas/camas.component';
import { RolesComponent } from '../roles/roles.component';
import { GestionComponent } from '../gestion/gestion.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    Login1Component,
    PisosComponent,
    SalasComponent,
    CamasComponent,
    RolesComponent,
    GestionComponent,
    NzIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
