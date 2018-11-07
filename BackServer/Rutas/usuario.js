// importamos express
var express = require('express');

//importamos el controlador
var usuarioController = require('../Controladores/usuario');

//modulo Router de Express
var router = express.Router();

//Rutas de usuario
router.get('/', usuarioController.obtenerUsuarios);

//exportamos el Router
module.exports = router;
