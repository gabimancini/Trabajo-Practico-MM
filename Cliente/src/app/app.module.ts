import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServiciosEmpresaComponent } from './components/pages/servicios-empresa/servicios-empresa.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginEmpleadorComponent } from './components/pages/login-empleador/login-empleador.component';
import { CargodatosComponent } from './components/pages/cargodatos/cargodatos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GraficasComponent } from './components/pages/graficas/graficas.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { RegistroComponent } from './components/pages/login/registro.component';



//modulos



//Services
import  { ServiciosEmpresaService  } from './services/servicios-empresa.service';
import { LoginEmpleadoComponent } from './components/pages/login-empleado/login-empleado.component';

//Rutas
import { RoutingModule } from './routing/routing.module';

// import { ProgressComponent } from './components/pages/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosEmpresaComponent,
    ContactoComponent,
    HomeComponent,
    LoginEmpleadoComponent,
    LoginEmpleadorComponent,
    CargodatosComponent,
    LoginComponent,
    DashboardComponent,
    GraficasComponent,
    ProgressComponent,
    RegistroComponent,




    ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiciosEmpresaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
