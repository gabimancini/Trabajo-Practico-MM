// Requires
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



// Iniciar express
const app = express();

//body-parser  x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//importar rutas
var rutaBaseApp = require('./Rutas/rutaBase.js');
var usuarioRuta = require('./Rutas/usuario.js');


//usar rutas
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
