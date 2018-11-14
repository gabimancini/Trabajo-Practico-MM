//importamos el modelo persona
var Persona = require('../Modelos/persona.js');

var md_auth = require('../Middlewares/auth.js')

//-------obtener personal --------
let obtenerPersonas = (req, res)=> {

   Persona.find({}, (err, personas) => {
     if (err) {
       return res.status(500).json({
         ok:false,
         mensaje: 'Error al cargar personas'
       });
     }
     else {
       {
         return res.status(200).json({
           ok:true,
           persona: personas
         })
       }
     }
   })
}

let crearPersona = (req, res) => {
  var body = req.body;

  var personaNueva = new Persona(
    {
      nombre: body.nombre,
      apellido: body.apellido,
      legajo: body.legajo,
      rol: body.rol,
      usuario:  body.usuario
    }
  );

  personaNueva.save( (err, personaGuardada) => {

    if (err) {
      return res.status(500).json({
        ok:false,
        mensaje: 'Error al crear persona'
      });
    }
    else {
      res.status(200).json({
        ok:true,
        persona: personaGuardada,
        personaToken: req.persona
      })
    }
  });


}

//------Actualizar persona --------
let actualizarPersona = (req, res, next) => {
  var id = req.params.id;
  var body = req.body;

  Persona.findById(id, (err, persona)=>{
    if(err){
      return res.status(500).json({
        ok:false,
        mensaje:'Error al buscar persona en la DB',
        errors: err
      });
    }

    if(!persona){
      return res.status(400).json({
        ok:false,
        mensaje:'El persona no existe',
        errors: {message: 'no existe el persona con ese id'}
      });
    }

    persona.nombre = body.nombre;
    persona.apellido = body.apellido;
    persona.legajo=body.legajo;
    persona.rol=body.rol;
    persona.usuario=body.usuario;

    persona.save((err,personaGuardado)=>{
      if(err){
        return res.status(400).json({
          ok:false,
          mensaje:'Error al guardar nuevo persona en la DB',
          errors: err
        });
      }
      res.status(200).json({
        ok:true,
        persona:personaGuardado
      });

    });

  });

}



module.exports = {
  obtenerPersonas,
  crearPersona,
  actualizarPersona
}
