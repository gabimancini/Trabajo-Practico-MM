//importamos el modelo camion

var Camion = require('../Modelos/camion.js');


//----Obtener Camiones-------
let obtenerCamiones = (req, res)=>{

  Camion.find({}, (err, camiones) => {

    if (err) {
      return res.status(500).json({
        ok:false,
        mensaje:'Error db al cargar camiones'
      });
    }
    else{
      res.status(200).json({
        ok:true,
        camion:camiones
      })
    }

  });
};

let crearCamion = (req, res)=>{
  var body = req.body;

  var camionNuevo = new Camion({
    patente: body.patente,
    capacidad: body.capacidad,
    modelo: body.modelo,
    legajo: body.legajo,
    nombre: body.nombre,
    descripcion: body.descripcion
  });

  camionNuevo.save( (err, camionGuardado) =>{

    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al crear el camion",
        errors: err
      });
    }
    res.status(200).json({
      ok:true,
      camion: camionGuardado
    })


  });
}


module.exports = {
  obtenerCamiones,
  crearCamion
}
