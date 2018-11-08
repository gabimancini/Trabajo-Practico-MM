const express = require('express');
const app = express.Router();



app.get('/rutas', (req, res, next)=>{
  res.status(200).json({
    ok: true,
    mensaje: 'Peticion realizada correctamente - Proyecto MM'
  });
}
);

module.exports = app;
