let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let marcaSchema = new Schema({
  nombre: {type: String, required:true},
  descripcion: {type: String}
})

let camionSchema = new Schema({
  patente: {type: String, unique:true, required: [true, 'La patente es necesaria']},
  capacidad: {type: Number, required:true},
  modelo: {type: String, required: false},
  legajo:{ type: Schema.Types.ObjectId, ref: 'Persona', required: [true, 'El camion tiene que tener un responsable']},
  marca: [marcaSchema]

});

camionSchema.plugin(uniqueValidator, { message: 'La patente debe ser unica'});

module.exports = mongoose.model('Camion', camionSchema);
