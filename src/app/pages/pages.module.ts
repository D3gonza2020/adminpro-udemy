import { NgModule } from '@angular/core';

//Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Graficas
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//Pipe Module
import { PipesModule } from '../pipes/pipes.module';

//Rutas
import { PAGES_ROUTING } from './pages.routes';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



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
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent,
    BusquedaComponent    
  ],
  exports: [   
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component     
  ],
  imports:[
    CommonModule,
    SharedModule,
    PAGES_ROUTING,
    FormsModule,
    ChartsModule,
    PipesModule     
  ]
})
export class PagesModule { }
