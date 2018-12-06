import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { UsuarioService } from '../../../services/service.index';
import { Router } from '../../../../../node_modules/@angular/router';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    public _usuarioService: UsuarioService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  ingresar(forma: NgForm){

    if(forma.invalid){
      return;
    }

    let usuario = new Usuario (forma.value.email, forma.value.clave);

/*Validando usuario según empleado o empleador
    this._usuarioService.login(usuario)
     .then((usuario)=>{

         // Segun tipo de usuario va a redireccionar a un home diferente

     })
*/
    console.log('logueado');
    this.router.navigate(['/empleado-interfaz']);

  }

}
