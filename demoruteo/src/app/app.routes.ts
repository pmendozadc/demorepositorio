import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { Detalle2 } from './detalle2/detalle2';
import { NotFound } from './not-found/not-found';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormReactivo } from './form-reactivo/form-reactivo';

export const routes: Routes = [
    {
    path: 'formreactivo',
    component: FormReactivo,
    title: 'Form reactivo',
    },
    {
    path: 'formplantilla',
    component: FormPlantilla,
    title: 'Form basado en plantilla',
    },
    {
    path: 'detalle1',
    component: Detalle1,
    title: 'Detalle 1',
    },
    {
    path: 'detalle2/:miparam',
    component: Detalle2,
    title: 'Detalle 2',
    },
    { path: 'redetalles', redirectTo: '/detalle1'},
    {
    path: '**',
    component: NotFound,
    title: 'Pagina no encontrada',
    }
];
