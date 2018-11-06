// Requires
let express = require('express');
let mongoose = require('mongoose');


// Iniciar express
var app = express();

//rutas
app.get('/', (req, res, next)=>{
  res.status(200).json({
    ok: true,
    mensaje: 'Peticion realizada correctamente'
  });
});


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
