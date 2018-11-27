'use strict'

// importamos express
const express = require('express');

//importamos el controlador
var LoginController = require('../Controladores/login.js');

//modulo Router de Express
const app = express.Router();

app.post('/', LoginController.login);
app.post('/google' , LoginController.loginGoogle);

module.exports = app;
