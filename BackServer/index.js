// Requires
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



// Iniciar express
const app = express();


//middle cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

//body-parser  x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//importar rutas
var rutaBaseApp = require('./Rutas/rutaBase.js');
var usuarioRuta = require('./Rutas/usuario.js');
var camionRuta = require('./Rutas/camion.js');
var personaRuta = require('./Rutas/persona.js');
var loginRuta = require('./Rutas/login.js');
var clienteRuta = require('./Rutas/cliente.js');
var ordenRuta = require('./Rutas/ordenCarga.js');


//usar rutas
app.use('/orden', ordenRuta);
app.use('/cliente',clienteRuta);
app.use('/login', loginRuta);
app.use('/persona', personaRuta);
app.use('/camion', camionRuta);
app.use('/usuario', usuarioRuta);
app.use('/',rutaBaseApp);



// conexion a la BD
let urlBD = "mongodb://adminBD:admin2018@ds155213.mlab.com:55213/proyecto-transporte-mm";

mongoose.connection.openUri(urlBD, (err, res) => {
	if (err) throw err;

	console.log('Base de datos: \x1b[32m%s\x1b[0m' , 'online');
});

//Escuchar las petciones, por ej en el puerto 3000
app.listen(3000, () => {
  console.log('Express corriendo en el puerto 3000 online');
});
