'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var UsuarioController = require('../Controladores/usuario.js');

//importamos el middleware para usar en operaciones que necesiten validar el Token
var md_auth = require('../middlewares/auth.js');

//modulo Router de Express
const app = express.Router();

//Rutas de usuario

app.get('/getUsuarios', UsuarioController.obtenerUsuarios);
app.post('/registroUsuario', md_auth, UsuarioController.crearUsuario);
app.put('/:id',md_auth, UsuarioController.actualizarUsuario);
app.delete('/:id',md_auth, UsuarioController.borrarUsuarioId);


//exportamos el Router
module.exports = app;
