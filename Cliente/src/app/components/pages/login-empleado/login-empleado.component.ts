import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css'] 
})
export class LoginEmpleadoComponent {

	empleado: Object = {
		usuario : null,
		clave : null
	}
	 
  constructor() { }

   
  enviar(forma:NgForm){
  	console.log(forma);
  	console.log(forma.value);
  }
	}

}
