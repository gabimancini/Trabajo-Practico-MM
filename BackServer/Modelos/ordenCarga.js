let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let autoIncremento = require('mongoose-auto-increment');

let Schema = mongoose.Schema;

let ordenCargaSchema = new Schema({
  codigoOrden: {type: Number, unique:true, required: true},
  fecha: {type: Date, required: true, default: Date.now},
  dirLocalidadDesde: {type:String, required: true},
  dirLocalidadHasta: {type: String, required: true},
  descripcionCarga: {type:String, required:true},
  peso:{type:Number, required:true},
  camion: {type: Schema.Types.ObjectId, ref: 'Camion', required: true},
  cliente: {type: Schema.Types.ObjectId, ref: 'Cliente', required: [true, 'El camion tiene que tener un responsable']}
});

ordenCargaSchema.plugin(uniqueValidator);
ordenCargaSchema.plugin(autoIncremento.plugin, {model:'OrdenCarga', field:'codigoOrden'});

module.exports = mongoose.model ('ordenCarga', ordenCargaSchema);
