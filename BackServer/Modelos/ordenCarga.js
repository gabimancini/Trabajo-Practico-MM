let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let autoIncremento = require('mongoose-auto-increment');

let Schema = mongoose.Schema;

let clienteSchema = new Schema ({
  codigoCliente:{type:Number, required:true, unique:true},
  razonSocial: {type:String, required:true},
  cuit: {type:Number, required:true},
  descripcion:{type:String}
});

clienteSchema.plugin(uniqueValidator);
clienteSchema.plugin(autoIncremento.plugin, {model: 'Cliente', field:'codigoCliente'});

let ordenCargaSchema = new Schema({
  codigoOrden: {type: Number, unique:true, required: true},
  fecha: {type: Date, required: true, default: Date.now},
  dirLocalidadDesde: {type:String, required: true},
  dirLocalidadHasta: {type: String, required: true},
  descripcionCarga: {type:String, required:true},
  peso:{type:Number, required:true},
  camion: {type: Schema.Types.ObjectId, ref: 'Camion', required: true},
  cliente: [clienteSchema]
});

ordenCargaSchema.plugin(uniqueValidator);
ordenCargaSchema.plugin(autoIncremento.plugin, {model:'OrdenCarga', field:'codigoOrden'});

moduel.exports = mongoose.model ('ordenCarga', ordenCargaSchema);
