import { Injectable } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { Router } from '../../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient,
    public router:Router
  ) {
    console.log('Servicio usuario listo');
  }

  crearUsuario(usuario: Usuario){

    let url = URL_SERVICIOS + 'usuario/registroUsuario';

    return new Promise ( (resolve, reject) => {
      this.http.post(url, usuario)
        .toPromise()
        .then( (resp) => {
          resolve(resp)
          console.log("Promesa ejecutada - crear", resp)
          this.router.navigate(['/login'])
        })
        .catch(error => console.log('error en la promesa',Promise.reject(error)))
    })

  }

  login(usuario: Usuario){

    let url = URL_SERVICIOS + 'login';

    return new Promise ( (resolve, reject) => {
        this.http.post(url, usuario)
          .toPromise()
          .then( (resp) => {
            resolve(resp)
            console.log("Promesa ejecutada - login")
          })
          .catch(error => console.log('error en la promesa-login',Promise.reject(error)))
    });

  }


}
