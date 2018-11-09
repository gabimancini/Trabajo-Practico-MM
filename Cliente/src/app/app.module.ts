import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiciosEmpresaComponent } from './pages/servicios-empresa/servicios-empresa.component';

//Services
import  { ServiciosEmpresaService  } from './services/servicios-empresa.service';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosEmpresaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiciosEmpresaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
