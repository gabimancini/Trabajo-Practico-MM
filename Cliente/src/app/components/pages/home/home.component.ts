import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	 constructor( ) { }
 //constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
  	/*const verificarUsuario = this.usuarioService.verificarSiUsuarioEstaLogueado();
  	if (verificarUsuario === true){
  		// En este punto sabemos que el usuario esta logueado
  		const rolDeUsuario = this.usuarioService.verificarRolUsuario();
  		if(rolDeUsuario === 'cliente'){
  			this.mostrarContenidoCliente = true
  		}
  	}*/
  }

}
