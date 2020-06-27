import { Routes,RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginGuardGuard } from './services/service.index';



const appRoutes:Routes = [   

    { path:'login', component:LoginComponent },        
    { path:'register',component:RegistroComponent },
    { 
        path:'',
        component:PagesComponent,
        canActivate: [ LoginGuardGuard ],       
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    //Cualquier otra ruta que no este definida en nuestro
    //arreglo de rutas debe mostrar ,l componente 
    //NopagefoundComponent
    {path:'**',component:NopagefoundComponent},
]


export const APP_ROUTING = RouterModule.forRoot(appRoutes, { useHash:true });