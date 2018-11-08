'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var UsuarioController = require('../Controladores/usuario.js');

//modulo Router de Express
const app = express.Router();

//Rutas de usuario

app.get('/getUsuarios', UsuarioController.obtenerUsuarios);
app.post('/registroUsuario', UsuarioController.crearUsuario);


//exportamos el Router
module.exports = app;
