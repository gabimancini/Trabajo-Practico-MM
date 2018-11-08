//importamos los modelos de la BD
var  Usuario = require('../Modelos/usuario.js');
var bcrypt = require('bcryptjs');



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

    });
}

//-------Crear Usuario--------
let crearUsuario = (req, res) => {

  var body = req.body;

  // res.status(200).json({
  //   ok:true,
  //   body:body
  // })
  var usuarioNuevo = new Usuario(
    {
      nombre: body.nombre,
      email: body.email,
      password: body.password,
      img: body.img,
      rol: body.rol
    }
  ); // creamos el nuevo obj

  usuarioNuevo.save( (err,usuarioGuardado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al crear el user",
        errors: err
      });
    }
    res.status(200).json({
      ok: true,
      usuario: usuarioGuardado
    })
  });

  // if (!body.nombre || body.email) {
  //   return res.status(500).json({
  //     ok: false,
  //     mensaje: "Error al crear usuario, campos incompletos"
  //   });
  // }
  // if (!body.password) {
  //   return res.status(500).json({
  //     ok: false,
  //     mensaje: "Error al crear usuario"
  //   })
  // }

  // usuarioNuevo.save( (err, usuarioGuardado) =>{
  //   res.status(200).json({
  //     ok: true,
  //     usuario: usuarioGuardado
  //   });
  // });

  // usuario.save().then((usuarioGuardado)=>{
  //   return res.send({
  //     usuario:usuarioGuardado,
  //     // token:jwt.createToken(usuarioGuardado)
  //   })
  // })
}

module.exports = {
  obtenerUsuarios,
  crearUsuario,
}
