let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let camionSchema = new Schema({
  patente: {type: String, unique:true, required: [true, 'La patente es necesaria']},
  capacidad: {type: Number, required:true},
  modelo: {type: String, required: false},
  marca: {type: String},
  legajo:{ type: Schema.Types.ObjectId, ref: 'Persona', required: [true, 'El camion tiene que tener un responsable']},

});

camionSchema.plugin(uniqueValidator, { message: 'La patente debe ser unica'});

module.exports = mongoose.model('Camion', camionSchema);
