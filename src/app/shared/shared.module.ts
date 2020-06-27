import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


import { RouterModule } from '@angular/router';

//Pipes
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,   
    SidebarComponent,
    ModalUploadComponent
  ],
  exports:[
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,    
    SidebarComponent,
    ModalUploadComponent
  ]
})
export class SharedModule { }
