import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componentes creados
import { AppComponent } from '../app.component'; 
import { ContactoComponent } from '../components/pages/contacto/contacto.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { LoginEmpleadoComponent } from '../components/pages/login-empleado/login-empleado.component';
import { LoginEmpleadorComponent } from '../components/pages/login-empleador/login-empleador.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'loginEmpleado', component: LoginEmpleadoComponent},
	{path: 'loginEmpleador', component:LoginEmpleadorComponent}
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
