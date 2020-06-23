import { Routes,RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';


const PAGES_ROUTES:Routes = [

    {   
        path:'',
        component:PagesComponent,
        canActivate: [ LoginGuardGuard],
        children: [
            {path:'dashboard',component:DashboardComponent, data: { titulo: 'Dashboard' }},
            {path:'progress',component:ProgressComponent, data: { titulo: 'Progress Bar' }},
            {path:'graficas1',component:Graficas1Component, data: { titulo: 'Gráficas' }}, 
            {path:'promesas',component:PromesasComponent, data: { titulo: 'Promesas' }}, 
            {path:'rxjs',component:RxjsComponent, data: { titulo: 'Rxjs' }}, 
            {path:'account-settings',component:AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' }}, 
            {path:'perfil',component:ProfileComponent, data: { titulo: 'Perfil de Usuario' }}, 
            //Mantenimientos
            {path:'usuarios',component:UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' }}, 
            {path:'hospitales',component:HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' }}, 
            {path:'medicos',component:MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' }}, 
            {path:'medico/:id',component:MedicoComponent, data: { titulo: 'Actualizar Médico' }}, 
            //En caso que se ingrese cualquier ruta vacia ('') 
            //va redireccionar a el dashboard
            {path:'', pathMatch:'full', redirectTo:'/dashboard'}          
        ]
    }
];

//forRoot: se usa cuando es la ruta principal
//forChild: se usa cuando son rutas dentro de otras rutas
export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);