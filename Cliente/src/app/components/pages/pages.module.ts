import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiciosEmpresaComponent } from './servicios-empresa/servicios-empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LoginEmpleadoComponent } from './login-empleado/login-empleado.component';
import { LoginEmpleadorComponent } from './login-empleador/login-empleador.component';
import { CargodatosComponent } from './cargodatos/cargodatos.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { RegistroComponent } from './login/registro.component';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './../shared/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
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
  exports: [
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
    CommonModule,
    BrowserModule,
    SharedComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class PagesModule {}
