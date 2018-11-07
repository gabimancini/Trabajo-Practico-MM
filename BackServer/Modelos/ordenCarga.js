let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let ordenCargaSchema = new Schema({
  codigo: {type: Number, required: [true, 'El codigo es necesario'},
  fecha: {type: Date, required: true},
  codLocalidadDesde: {type: Schema.Types.ObjectId, ref: 'Localidad' , required: true},
  codLocalidadHasta: {type: Schema.Types.ObjectId, ref: 'Localidad'}, required: true,
  camion: {type: Schema.Types.ObjectId, ref: 'Camion', required: true},

});

moduel.exports = mongoose.model ('ordenCarga', ordenCargaSchema);
