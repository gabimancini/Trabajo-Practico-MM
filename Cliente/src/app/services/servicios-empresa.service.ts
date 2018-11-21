import { Injectable } from '@angular/core';
import { InterfazUsuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpresaService {
	private servicios:serviciosEmpresa[]=[
    {
      title: "Distribución Nacional",
      description:  "Garantizamos una gestión rápida y segura que permiten optimizar los tiempos de tránsito y realizar el seguimiento en tiempo real.",
      img: "../../../../assets/img/nacional.jpg"
    },
    {
       title: "Logística Integral",
      description: "Conseguimos la mayor eficacia posible en distribución y esto lo consigue poniendo los productos en el lugar y momento oportuno.",
      img: "../../../../assets/img/logistica.jpg"
    },
    {
       title: "Gestión de Stock",
      description:  "Al elegirnos,cuenta con una organización  en la gestión de inventarios, almacenes en las localidades más importantes del país. ",
      img: "../../../../assets/img/stock.jpg"
    }
  ];


  constructor() {
  }
getServicios():serviciosEmpresa[]{
	return this.servicios;
}

// EJEMPLO DE LOGIN
// USUARIO DESDE ALGUN COMPONENTE COMPLETA UN FORMULARIO
// EL FORMULARIO TIENE EMAIL Y CONTRASEÑA
// SE BINDEA CON NGMODEL

// loginUser(usuario: {email: string, password: string}) {
//   this.http.post("ruta_loguearusuario", usuario).toPromise()
//   .then((respuestaServidor: {id: string, nombre: string, imagen: string, token:string})=>{
//     localStorage.setItem("tokenUsuario",respuestaServidor.token)
//     localStorage.setItem("datosUsuario",JSON.stringify(respuestaServidor));
//     localStorage.setItem("logueado","true");
//
//   })
//   .catch()
// }

// EJEMPLO CREACION ORDEN
/*
crearOrden(nombre:string, desde: string, hasta:string){
  return new Promise((resolve,reject)=>{

    this.post("ruta_crearOrden",{
      desde: desde,
      hasta: hasta,
      user: usuario.id;
    }).toPromise()
    .then((ok)=>{
      resolve("Se publico")
    })
    .catch((error)=>{
      reject("error")
    })

  })

}

this.usuarioService.crearOrden({desde,hasta})
.then(
  console.log("ORden creada")
)
.catch(
  console.error("Orden no creada")
)

post(url, body){
  let token = localStorage.getItem("token");
  let usuario = JSON.parse(localStorage.getItem("datosUsuario"));
  if(!usuario){
    reject("NO HAY USUARIO")
  };
  this.http.post()
}

get chequearSiUserEstaLogueado(usuario: InterfazUsuario){
  usuario.
  let logueado = localStorage.get("logueado");
  if(logueado){
    return true;
  }
  return false;
}
*/
}

// export interface serviciosEmpresa{
// 	  title: string,
//       description:  string,
//       img: string
//
// }
