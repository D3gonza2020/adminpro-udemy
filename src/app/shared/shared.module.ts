import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,   
    SidebarComponent,
  ],
  exports:[
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,    
    SidebarComponent,
  ]
})
export class SharedModule { }
