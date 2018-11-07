//importamos los modelos de la BD
var  Usuario = require('../Modelos/usuario.js');




//-----Obtener usuarios-----
let obtenerUsuarios = (req, res) => {

    Usuario.find({}, 'nombre email', (err, usuarios) => {

      if (err) {
  			return res.status(500).json({
  				ok: false,
  				mensaje: 'Error db cargando usuarios',
  				errors: err
  			});
  		}
      else{
        res.status(200).json({
          ok: true,
          usuario: usuarios
        });
      }

    })
}


module.exports = {
  obtenerUsuarios,
}
