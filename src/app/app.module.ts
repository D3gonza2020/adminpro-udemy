import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Modules

//Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Servicios
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    RegistroComponent,
    PagesComponent               
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,  
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule        
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
