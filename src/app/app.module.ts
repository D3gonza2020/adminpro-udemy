import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Modules
import { PagesModule } from './pages/pages.module';

//Temporal
import { FormsModule } from '@angular/forms';

//Servicios
import { ServiceModule } from './services/service.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    RegistroComponent               
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    FormsModule,
    ServiceModule        
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
