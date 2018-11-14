//Middleware para verificar que el usuario este logueado al realizar una request

"use strict";

var jwt = require('jsonwebtoken');



let verificarUsuario = (req, res, next) => {

    var token = req.query.token;

    jwt.verify(token, 'clave', (err, decoded) => {

      if (err) {
        return res.status(401).json({
          ok:false,
          mensaje: 'Token incorrecto',
          errors: err
        });
      }
      req.usuario = decoded.usuario;
      next();
    });
}

module.exports = verificarUsuario;
