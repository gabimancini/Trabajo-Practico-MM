import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpresaService {
	private servicios:serviciosEmpresa[]=[
    {
      title: "Distribución Nacional",
      description:  "Garantizamos una gestión rápida y segura que permiten optimizar los tiempos de tránsito y realizar el seguimiento en tiempo real.",
      img: "../../../assets/img/nacional.jpg"
    },
    {
       title: "Logística Integral",
      description: "Conseguimos la mayor eficacia posible en distribución y esto lo consigue poniendo los productos en el lugar y momento oportuno.",
      img: "../../../assets/img/logistica.jpg"
    }, 
    {
       title: "Logística Integral",
      description:  "Al elegirnos,cuenta con una organización  en la gestión de inventarios, almacenes en las localidades más importantes del país. ",
      img: "../../../assets/img/stock.jpg"
    } 
  ];


  constructor() { 
  	console.log("servicio andando" + ServiciosEmpresaService);
  }
getServicios():serviciosEmpresa[]{
	return this.servicios;
}

}
export interface serviciosEmpresa{
	  title: string,
      description:  string,
      img: string

};