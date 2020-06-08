import { Routes,RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const PAGES_ROUTES:Routes = [

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
    }
];

//forRoot: se usa cuando es la ruta principal
//forChild: se usa cuando son rutas dentro de otras rutas
export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);