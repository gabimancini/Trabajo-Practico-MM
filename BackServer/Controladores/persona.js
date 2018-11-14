//importamos el modelo persona
var Persona = require('../Modelos/persona.js');

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
      nombre:body.nombre,
      apellido:body.apellido,
      legajo:body.legajo,
      rol:body.rol,
      img: body.img,
      usuario: req.usuario._id
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
        persona: personaGuardada
      })
    }
  });


}

module.exports = {
  obtenerPersonas,
  crearPersona
}
