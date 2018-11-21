var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var app = express();

var  Usuario = require('../Modelos/usuario.js');

let login = (req, res) => {

  var body = req.body;

  Usuario.findOne({legajo: body.legajo} , (err, usuarioDB) => {

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
        mensaje: "Credenciales incorrectas - legajo",
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
  login
}
