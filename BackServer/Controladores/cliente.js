//importamos el modelo cliente

var Cliente = require('../Modelos/cliente.js');


//----Obtener Clientes-------
let obtenerClientes = (req, res)=>{

  Cliente.find({}, (err, clientes) => {

    if (err) {
      return res.status(500).json({
        ok:false,
        mensaje:'Error db al cargar clientes'
      });
    }
    else{
      res.status(200).json({
        ok:true,
        cliente:clientes
      })
    }

  });
};

// --------Crear Cliente ------------

let crearCliente = (req, res)=>{

  var body = req.body;

  var clienteNuevo = new Cliente({
    razonSocial: body.razonSocial,
    cuit: body.cuit,
    descripcion: body.descripcion,
  });

  clienteNuevo.save( (err, clienteGuardado) =>{

    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al crear el cliente",
        errors: err
      });
    }
    res.status(200).json({
      ok:true,
      cliente: clienteGuardado
    })

  });
}

//------Actualizar cliente ------------
let actualizarCliente = (req, res) => {
  var body = req.body;
  var id = req.params.id;

  Cliente.findById(id, (err, cliente) =>{

    if (err) {
      return res.status(500).json({
        ok:false,
        mensaje:'Error al buscar Cliente en la DB',
        errors: err
      });
    }
    if(!cliente){
      return res.status(400).json({
        ok:false,
        mensaje:'El cliente no existe',
        errors: {message: 'no existe el cliente con ese id'}
      });
    }

    cliente.razonSocial=body.razonSocial;
    cliente.cuit=body.cuit;
    cliente.descripcion=body.descripcion;

    cliente.save((err,clienteGuardado) => {
      if(err){
        return res.status(400).json({
          ok:false,
          mensaje:'Error al guardar nuevo cliente en la DB',
          errors: err
        });
      }
      res.status(200).json({
        ok:true,
        cliente:clienteGuardado
      });
    });

  });

}

//---------Borrar Cliente----------
let borrarClienteId = (req, res)=>{

  var id = req.params.id;

  Cliente.findByIdAndRemove(id, (err, clienteBorrado)=>{

    if(err){
        return res.status(500).json({
          ok:false,
          mensaje:'No existe cliente con ese Id'
        });
    }

    if(!clienteBorrado){
      return res.status(400).json({
        ok:false,
        mensaje: 'No existe el cliente'
      })
    }

    res.status(200).json({
      ok:true,
      cliente: clienteBorrado
    })
  });
};

/*
crearOrder = (req,res) => {
  let orden = Order.create();
  orden.cliente =req.body.usua;
  orden.clientes.push("id132131","1232323");
  orden.save();
 let ordenADevolver = orden;
 ordenADevolver.clientes = [];
  orden.clientes.map((cliente)=> {
    cliente = Cliente.find(cliente);
    ordenADevolver.clientes.push(cliente)

  })
}
*/
module.exports = {
  obtenerClientees,
  crearCliente,
  actualizarCliente,
  borrarClienteId
}
