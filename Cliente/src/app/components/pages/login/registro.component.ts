import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { UsuarioService } from '../../../services/service.index';
import { Usuario } from '../../../modelos/usuario.model';
import { Router } from '../../../../../node_modules/@angular/router';



// declare function init_plugins();

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {


  forma: FormGroup;


  constructor(
    public _usuarioService: UsuarioService,
    public router:Router
  ) { }

  sonIguales(campo1:string, campo2:string){
      return (group:FormGroup) => {

        let pas1 = group.controls[campo1].value;
        let pas2 = group.controls[campo2].value;

        if (pas1 === pas2) {
            return null;
        }
        return{
          sonIguales:true
        };
      };
  }

  ngOnInit() {

    // init_plugins();

    this.forma = new FormGroup({
      email: new FormControl(null, [Validators.required , Validators.email]),
      clave: new FormControl(null, Validators.required),
      clave2: new FormControl(null, Validators.required),
    }, {validators: this.sonIguales('clave','clave2')});


    this.forma.setValue({
      email: 'correo@correo.com',
      clave: '123456',
      clave2: '123456'
    });
  }

  registrarUsuario(){

    if (this.forma.invalid) {
        return;
    }

    let usuario = new Usuario(
      this.forma.value.email,
      this.forma.value.clave,
    );

    this._usuarioService.crearUsuario(usuario)
    this.router.navigate(['/empleado-interfaz']);
      // .subscribe(resp => {
      //   console.log(resp);
      //   this.router.navigate(['/login']);
      // });
    // console.log('Forma Valida : ', this.forma.valid);
    // console.log(this.forma.value);
  }


}
