'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var CamionController = require('../Controladores/camion.js');

//modulo Router de Express
const app = express.Router()

//Rutas para Camion
app.get('/getCamiones', CamionController.obtenerCamiones);
 app.post('/registroCamion', CamionController.crearCamion);
// app.put('/:id', CamionController.actualizarCamion);
// app.delete('/:id', CamionController.borrarCamion);


//exportamos el Router
module.exports = app;
