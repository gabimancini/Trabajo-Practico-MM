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

// --------Crear Camion ------------

let crearCamion = (req, res)=>{

  var body = req.body;

  var camionNuevo = new Camion({
    patente: body.patente,
    capacidad: body.capacidad,
    modelo: body.modelo,
    legajo: body.legajo,
    marca: body.marca
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

//------Actualizar camion ------------
let actualizarCamion = (req, res) => {
  var body = req.body;
  var id = req.params.id;

  Camion.findById(id, (err, camion) =>{

    if (err) {
      return res.status(500).json({
        ok:false,
        mensaje:'Error al buscar Camion en la DB',
        errors: err
      });
    }
    if(!camion){
      return res.status(400).json({
        ok:false,
        mensaje:'El camion no existe',
        errors: {message: 'no existe el camion con ese id'}
      });
    }

    camion.capacidad=body.capacidad;
    camion.modelo=body.modelo;
    camion.legajo=body.legajo;
    camion.marca=body.marca;

    camion.save((err,camionGuardado) => {
      if(err){
        return res.status(400).json({
          ok:false,
          mensaje:'Error al guardar nuevo camion en la DB',
          errors: err
        });
      }
      res.status(200).json({
        ok:true,
        camion:camionGuardado
      });
    });

  });

}

/*
crearOrder = (req,res) => {
  let orden = Order.create();
  orden.usuario =req.body.usua;
  orden.clientes.push("id132131","1232323");
  orden.save();
 let ordenADevolver = orden;
 ordenADevolver.usuarios = [];
  orden.clientes.map((cliente)=> {
    cliente = Cliente.find(cliente);
    ordenADevolver.clientes.push(cliente)

  })
}
*/
module.exports = {
  obtenerCamiones,
  crearCamion
}
