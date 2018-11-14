'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var PersonaController = require('../Controladores/persona.js');

//modulo Router de Express
const app = express.Router();

//Rutas de usuario

app.get('/getPersonas', PersonaController.obtenerPersonas);
app.post('/registroPersona', PersonaController.crearPersona);
// app.put('/:id', UsuarioController.actualizarUsuario);
// app.delete('/:id', UsuarioController.borrarUsuarioId);


//exportamos el Router
module.exports = app;
