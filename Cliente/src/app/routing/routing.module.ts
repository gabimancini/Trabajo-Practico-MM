import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componentes creados
import { AppComponent } from '../app.component'; 
import { ContactoComponent } from '../components/pages/contacto/contacto.component';
import { HomeComponent } from '../components/pages/home/home.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent}
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
