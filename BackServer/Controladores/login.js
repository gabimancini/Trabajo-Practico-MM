var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var app = express();

var  Usuario = require('../Modelos/usuario.js');

const GOOGLE_CLIENT_ID = require('../Config/config.js').GOOGLE_CLIENT_ID;
const GOOGLE_SECRET = require('../Config/config.js').GOOGLE_SECRET;

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(GOOGLE_CLIENT_ID);



// **********Autenticacion google *************
let loginGoogle = (req, res) => {

  var token = req.body.token;

  //var client = new auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_SECRET, '');

  async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];

  Usuario.findOne({email: payload.email}, (err, usuario) => {
     if (err) {
       return res.status(400).json({
         ok: false,
         mensaje: "error al buscar usuario",
         errors: err
       });

     }

     if (usuario) {

       if (usuario.google === false) {
         return res.status(400).json({
           ok: false,
           mensaje: "debe autenticarse de forma normal"

         });
       }
       else {
         //crear un token
         var token = jwt.sign({ usuario:usuario } , 'clave', { expiresIn: 14400 });



         res.status(200).json({
           ok:true,
           usuario: usuario,
           token:token,
           id: usuario._id
         });

       }
     }
     // si no existe por correo
     else{

       var usuario = new Usuario();
        usuario.nombre = payload.name;
        usuario.email = payload.email;
        usuario.rol = payload.rol;
        usuario.password = ':)';
        usuario.google = true;

        usuario.save( (err, usuario) =>{

          if (err) {
            return res.status(400).json({
              ok: false,
              mensaje: "error al crer usuario - Google",
              errors: err
            });
          }

          //crear un token
          var token = jwt.sign({ usuario:usuario } , 'clave', { expiresIn: 14400 });

          res.status(200).json({
            ok:true,
            usuario: usuario,
            token:token,
            id: usuario._id
          });

        });
     }

  });



}


verify().catch(console.error);

  // client.verifyIdToken(
  //   token,
  //   GOOGLE.CLIENT_ID,

  //   function(e, login){
  //
  //     if (e) {
  //       return res.status(500).json({
  //         ok: false,
  //         errors: e
  //       });
  //
  //     }
  //
  //
  //     var payload = login.getPayload();
  //     var userid = payload['sub'];
  //
  //     res.sataus(200),json({
  //       ok:true,
  //       payload: payload
  //     });
  //   }
  //
  // )


}

// ****Autenticacion normal************

let login = (req, res) => {

  var body = req.body;

  Usuario.findOne({email: body.email} , (err, usuarioDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al buscar el email",
        errors: err
      });
    }

    if (!usuarioDB) {
      return res.status(500).json({
        ok: false,
        mensaje: "Credenciales incorrectas - email",
        errors: err
      });
    }

    // if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
    if (!Usuario.password === body.password) {
      return res.status(500).json({
        ok: false,
        mensaje: "Credenciales incorrectas - pass",
        errors: err
      });
    }

    //crear un token
    var token = jwt.sign({ usuario:usuarioDB } , 'clave', { expiresIn: 14400 });



    res.status(200).json({
      ok:true,
      usuario: usuarioDB,
      token:token,
      id: usuarioDB._id
    });


  });

}

module.exports = {
  login,
  loginGoogle
}
