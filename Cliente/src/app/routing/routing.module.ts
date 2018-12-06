 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componentes creados
import { AppComponent } from '../app.component';
import { ContactoComponent } from '../components/pages/contacto/contacto.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { LoginEmpleadoComponent } from '../components/pages/login-empleado/login-empleado.component';
import { LoginEmpleadorComponent } from '../components/pages/login-empleador/login-empleador.component';
import { CargodatosComponent } from '../components/pages/cargodatos/cargodatos.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { ProgressComponent } from '../components/pages/progress/progress.component';
import { GraficasComponent } from '../components/pages/graficas/graficas.component';
import { RegistroComponent } from '../components/pages/login/registro.component';
 import { EmpleadoInterfazComponent } from '../components/pages//empleado-interfaz/empleado-interfaz.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'progress', component:ProgressComponent},
  {path: 'graficas', component:GraficasComponent},
  {path: '', component: HomeComponent},
  {path: 'loginEmpleado', component: LoginEmpleadoComponent},
  {path: 'loginEmpleador', component:LoginEmpleadorComponent},
  {path: 'cargoDatos', component:CargodatosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'empleado-interfaz', component:EmpleadoInterfazComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},

];

@NgModule({
	imports: [
	 RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]

})

export class RoutingModule { }
