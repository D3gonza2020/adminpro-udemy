import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegistroComponent } from './login/registro.component';

const appRoutes:Routes = [
    {   
        path:'',
        component:PagesComponent,
        children: [

            {path:'dashboard',component:DashboardComponent},
            {path:'progress',component:ProgressComponent},
            {path:'graficas1',component:Graficas1Component}, 
            //En caso que se ingrese cualquier ruta vacia ('') 
            //va redireccionar a el dashboard
            {path:'', pathMatch:'full', redirectTo:'/dashboard'}          
        ]
    },

    { path:'login', component:LoginComponent },        
    { path:'register',component:RegistroComponent },
    //Cualquier otra ruta que no este definida en nuestro
    //arreglo de rutas debe mostrar ,l componente 
    //NopagefoundComponent
    {path:'**',component:NopagefoundComponent},
]


export const APP_ROUTING = RouterModule.forRoot(appRoutes, { useHash:true });