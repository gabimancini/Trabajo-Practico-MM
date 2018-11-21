let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let autoIncremento = require('mongoose-auto-increment');

let Schema = mongoose.Schema;


var connection = mongoose.createConnection("mongodb://adminBD:admin2018@ds155213.mlab.com:55213/proyecto-transporte-mm");

autoIncremento.initialize(connection);

let personaSchema = new Schema ({
  nombre: { type: String, required: [true, 'El nombre es necesario']},
  apellido: { type: String, required: [true, 'El apellido es necesario']},
  tipoDoc: {type: String, required:true},
  nroDoc: {type: Number, required:true},
  img: {type: String, required: false},
  legUsuario: {type: Schema.Types.ObjectId, ref:'Usuario', required: [true, 'El usuario es requerido']},

});

personaSchema.plugin(uniqueValidator);
personaSchema.plugin(autoIncremento.plugin, {model:'Persona', field: 'legajo'})

module.exports = mongoose.model('Persona', personaSchema);
