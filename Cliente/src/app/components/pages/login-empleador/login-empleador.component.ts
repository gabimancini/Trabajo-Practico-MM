import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-empleador',
  templateUrl: './login-empleador.component.html',
  styleUrls: ['./login-empleador.component.css']
})
export class LoginEmpleadorComponent {

 	empleador: Object = {
		usuario : null,
		clave : null
	}
	 
  constructor() { }

   
  enviar(forma:NgForm){
  	console.log(forma);
  	console.log(forma.value);
  }

}
