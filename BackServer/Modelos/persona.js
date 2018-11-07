let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personaSchema = new Schema ({
  nombre: { type: String, required: [true, 'El nombre es necesario']},
  apellido: { type: String, required: [true, 'El apellido es necesario']},
  legajo: { type: Number, unique: true, required: [true, 'El legajo es necesario']},
  rol: {type: String, required: true},
  img: {type: Strig, required: false},
  usuario: {type: Schema.Types.ObjectId, ref:'Usuario', required: [true, 'El usuario es requerido']},

});

module.exports = mongoose.model('Persona', personaSchema);
