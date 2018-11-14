'use strict'

// importamos express
const express = require('express');

//importamos el middleware para usar en operaciones que necesiten validar el Token
var md_auth = require('../middlewares/auth.js');

//importamos el controlador
var PersonaController = require('../Controladores/persona.js');

//modulo Router de Express
const app = express.Router();

//Rutas de usuario

app.get('/getPersonas', PersonaController.obtenerPersonas);
app.post('/registroPersona',md_auth, PersonaController.crearPersona);
app.put('/:id',md_auth, PersonaController.actualizarPersona);
app.delete('/:id',md_auth, PersonaController.borrarPersonaId);


//exportamos el Router
module.exports = app;
