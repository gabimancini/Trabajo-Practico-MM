//importamos los modelos de la BD
var  OrdenCarga = require('../Modelos/ordenCarga.js');
var bcrypt = require('bcryptjs');


//-----Obtener ordenCargas-----
let obtenerOrdenCargas = (req, res) => {

    OrdenCarga.find({}, (err, ordenCargas) => {

      if (err) {
  			return res.status(500).json({
  				ok: false,
  				mensaje: 'Error db cargando orden de Carga',
  				errors: err
  			});
  		}
      else{
        res.status(200).json({
          ok: true,
          ordenCarga: ordenCargas
        });
      }

    });
}

//-------Crear OrdenCarga--------
let crearOrdenCarga = (req, res) => {

  var body = req.body;

  var ordenCargaNuevo = new OrdenCarga(
    {
      fecha: body.fecha,
      dirLocalidadDesde: body.dirLocalidadDesde,
      dirLocalidadHasta: body.dirLocalidadHasta,
      descripcionCarga: body.descripcionCarga,
      peso: body.peso,
      camion: body.camion,
      cliente: body.cliente
    }
  ); // creamos el nuevo obj

  ordenCargaNuevo.save( (err,ordenCargaGuardado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al crear la orden",
        errors: err
      });
    }
    res.status(200).json({
      ok: true,
      ordenCarga: ordenCargaGuardado,
      ordenCargaToken: req.ordenCarga
    })
  });

}

// -------Actualizar ordenCarga ---------
let actualizarOrdenCarga = (req, res, next) => {
  var id = req.params.id;
  var body = req.body;

  OrdenCarga.findById(id, (err, ordenCarga)=>{
    if(err){
      return res.status(500).json({
        ok:false,
        mensaje:'Error al buscar la orden en la DB',
        errors: err
      });
    }

    if(!ordenCarga){
      return res.status(400).json({
        ok:false,
        mensaje:'El ordenCarga no existe',
        errors: {message: 'no existe orden con ese id'}
      });
    }

    ordenCarga.fecha = body.fecha;
    ordenCarga.dirLocalidadDesde=body.dirLocalidadDesde;
    ordenCarga.dirLocalidadHasta=body.dirLocalidadHasta;
    ordenCarga.descripcionCarga=body.descripcionCarga;
    ordenCarga.peso=body.peso;
    ordenCarga.camion=body.camion;
    ordenCarga.cliente=body.cliente;

    ordenCarga.save((err,ordenCargaGuardado)=>{
      if(err){
        return res.status(400).json({
          ok:false,
          mensaje:'Error al guardar nueva orden en la DB',
          errors: err
        });
      }
      res.status(200).json({
        ok:true,
        ordenCarga:ordenCargaGuardado
      });

    });

  });

}

let borrarOrdenCargaId = (req, res)=>{

  var id = req.params.id;

  OrdenCarga.findByIdAndRemove(id, (err, ordenCargaBorrado)=>{

    if(err){
        return res.status(500).json({
          ok:false,
          mensaje:'No existe una orden con ese Id'
        });
    }

    if(!ordenCargaBorrado){
      return res.status(400).json({
        ok:false,
        mensaje: 'No existe la orden'
      })
    }

    res.status(200).json({
      ok:true,
      ordenCarga: ordenCargaBorrado
    })
  });
};




module.exports = {
  obtenerOrdenCargas,
  crearOrdenCarga,
  actualizarOrdenCarga,
  borrarOrdenCargaId
}
