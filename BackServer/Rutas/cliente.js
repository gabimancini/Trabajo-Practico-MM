'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var ClienteController = require('../Controladores/cliente.js');

//modulo Router de Express
const app = express.Router()

//Rutas para Cliente
app.get('/getClientees', ClienteController.obtenerClientes);
app.post('/registroCliente', ClienteController.crearCliente);
app.put('/:id', ClienteController.actualizarCliente);
app.delete('/:id', ClienteController.borrarClienteId);


//exportamos el Router
module.exports = app;
