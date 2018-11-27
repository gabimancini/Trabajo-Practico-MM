import { Injectable } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio usuario listo');
  }

  crearUsuario(usuario: Usuario){
    let url = URL_SERVICIOS + 'usuario/registroUsuario';

    return this.http.post(url,usuario); //retornamos un observador al cual nos vamos a poder subscribir
  }
}
