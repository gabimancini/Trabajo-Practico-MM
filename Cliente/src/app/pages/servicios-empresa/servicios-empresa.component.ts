import { Component, OnInit } from '@angular/core';
import  { ServiciosEmpresaService, serviciosEmpresa  } from '../../services/servicios-empresa.service';


@Component({
  selector: 'app-servicios-empresa',
  templateUrl: './servicios-empresa.component.html',
  styleUrls: ['./servicios-empresa.component.css']
})
export class ServiciosEmpresaComponent implements OnInit {

	servicios: any[] = [];

  constructor( private serviciosEmpresa : ServiciosEmpresaService ) { }

  ngOnInit() {
  	this.servicios = this.serviciosEmpresa.getServicios();
  }

}
