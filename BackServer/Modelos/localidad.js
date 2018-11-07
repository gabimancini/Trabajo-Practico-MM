let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let localidadSchema = ({
  codigo: {types: Number, unique:true, required: [true, 'Seleccionar codigo localidad'],
  nombre: {types: String, requried:true},
});

module.exports = mongoose.model('Localidad', localidadSchema);
