//importamos los modelos de la BD
var  Usuario = require('../Modelos/usuario.js');
var bcrypt = require('bcryptjs');

// Importamos servicio de JWT
var jwt = require('../servicios/jwt');

//-----Obtener usuarios-----
let obtenerUsuarios = (req, res) => {

    Usuario.find({}, 'nombre email password', (err, usuarios) => {

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
      usuario: usuarioGuardado,
      usuarioToken: req.usuario
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

//-------Login de usuario ---------------

// let login = (req, res) => {
//   let body = req.body;
//
//   let email = body.email;
//   let password = body.password;
//
//   Usuario.findOne({email: email.toLowerCase()})
//     .then( (usuarioEncontrado) => {
//         if (!usuarioEncontrado) {
//           return res.status(400).json({
//             ok:false,
//             mensaje: 'No existe el usuario'
//           });
//         }
//
//         bcrypt.compare(password,usuarioEncontrado.password)
//         .then((passOk)=>{
//           if(passOk){
//             // Si salió todo bien, enviamos el JWT del usuario, que le permitirá loguearse
//             return res.status(200).json({
//               ok:true,
//               usuarioEncontrado: usuarioEncontrado,
//               token: jwt.createToken(usuarioEncontrado)
//             });
//
//
//           }else{
//             // Sinó, la contraseña no es correcta
//             return res.status(400).json({
//               ok:false,
//               mensaje: 'Contraseña incorrecta'
//             });
//
//           }
//         })
//
//
//     })
// }

// -------Actualizar usuario ---------
let actualizarUsuario = (req, res, next) => {
  var id = req.params.id;
  var body = req.body;

  Usuario.findById(id, (err, usuario)=>{
    if(err){
      return res.status(500).json({
        ok:false,
        mensaje:'Error al buscar usuario en la DB',
        errors: err
      });
    }

    if(!usuario){
      return res.status(400).json({
        ok:false,
        mensaje:'El usuario no existe',
        errors: {message: 'no existe el usuario con ese id'}
      });
    }

    usuario.nombre = body.nombre;
    usuario.email=body.email;
    usuario.rol=body.rol;

    usuario.save((err,usuarioGuardado)=>{
      if(err){
        return res.status(400).json({
          ok:false,
          mensaje:'Error al guardar nuevo usuario en la DB',
          errors: err
        });
      }
      res.status(200).json({
        ok:true,
        usuario:usuarioGuardado
      });

    });

  });

}

let borrarUsuarioId = (req, res)=>{

  var id = req.params.id;

  Usuario.findByIdAndRemove(id, (err, usuarioBorrado)=>{

    if(err){
        return res.status(500).json({
          ok:false,
          mensaje:'No existe usuario con ese Id'
        });
    }

    if(!usuarioBorrado){
      return res.status(400).json({
        ok:false,
        mensaje: 'No existe el usuario'
      })
    }

    res.status(200).json({
      ok:true,
      usuario: usuarioBorrado
    })
  });
};




module.exports = {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  borrarUsuarioId
}
