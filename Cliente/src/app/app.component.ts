import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logistic';

  // constructor(){
  //   localStorage.removeItem("logueado");
  //   if(this.usuarioService.chequearSiUserEstaLogueado){
  //     this.router.navigate("/escritorio")
  //   }
  //   /*
  //   let datosUsuario = {
  //     id:"1232313",
  //     nombre: "JUan"
  //   };
  //   Convierto de JSON a CADENA
  //   let logueado = localStorage.setItem("logueado", JSON.stringify(datosUsuario));
  //   CONVIERTO DE CADENA A JSON
  //   let datosParseados = JSON.parse(localStorage.getItem("logueado"));
  //
  //   if(logueado == "true"){
  //     console.log("Estas logueado")
  //   }else{
  //     console.log("No estas logueado")
  //   }
  //   */
  // }
}
