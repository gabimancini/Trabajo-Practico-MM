import { Injectable } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { map, take } from 'rxjs/operators';

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

    //retornamos un observador al cual nos vamos a poder subscribir
    return this.http.post(url,usuario)
        .pipe(
          map( (resp:any) => {
            console.log("usuario creado", resp);
            return resp.usuario;
          })
        )

  }

  login(usuario: Usuario){

    let url = URL_SERVICIOS + 'login';

    return this.http.post(url, usuario)
    .pipe(
      map( (resp:any) => {
        localStorage.setItem('id',resp.id);
        localStorage.setItem('token',resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario) );
      })
    )


  }


}
