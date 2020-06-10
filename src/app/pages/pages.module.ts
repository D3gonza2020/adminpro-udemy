import { NgModule } from '@angular/core';

//Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

//Graficas
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//Rutas
import { PAGES_ROUTING } from './pages.routes';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



//NOTA:cuando se trabaja con modulos
//si queremos que estas componentes
//sean usados por otros componentes
//que se encuentren fuera de este modulo
//debemos exportarlos tambien.
//Es decir, todos los componentes
//dentro de los declarations se pueden
//invocar entre ellos
//pero si deseamos que otro componentes
//que no esten en este modulo tambien
//puedan usarlos debemos exportarlos

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent    
  ],
  exports: [   
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component     
  ],
  imports:[
    SharedModule,
    PAGES_ROUTING,
    FormsModule,
    ChartsModule     
  ]
})
export class PagesModule { }
