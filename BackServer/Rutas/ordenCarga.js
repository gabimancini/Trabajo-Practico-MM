'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var OrdenCargaController = require('../Controladores/ordenCarga.js');

//modulo Router de Express
const app = express.Router()

//Rutas para OrdenCarga
app.get('/getOrdenCargas', OrdenCargaController.obtenerOrdenCargas);
app.post('/registroOrdenCarga', OrdenCargaController.crearOrdenCarga);
app.put('/:id', OrdenCargaController.actualizarOrdenCarga);
app.delete('/:id', OrdenCargaController.borrarOrdenCargaId);


//exportamos el Router
module.exports = app;
