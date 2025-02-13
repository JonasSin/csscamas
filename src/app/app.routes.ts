import { Routes } from '@angular/router';
import { Login1Component } from './login-1/login-1.component';
import { SalasComponent } from './salas/salas.component';
import { CamasComponent } from './camas/camas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { title } from 'process';
import { PisosComponent } from './pisos/pisos.component';


export const routes: Routes = [
    {
        path: '',
        component: Login1Component,
        title: 'Iniciar sesión'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'pisos',
        component: PisosComponent,
        title: 'Pisos'
    },
    {
        path: 'salas',
        component: SalasComponent,
        title: 'Salas' 
    }


];
