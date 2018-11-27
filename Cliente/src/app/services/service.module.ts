import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{
  UsuarioService
}from './service.index';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    UsuarioService
  ]
})
export class ServiceModule { }
