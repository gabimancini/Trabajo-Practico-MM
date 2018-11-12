let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let clienteSchema = new Schema ({
  codigoCliente:{type:Number, required:true},
  razonSocial: {type:String, required:true},
  cuit: {type:Number, required:true},
  descripcion:{type:String}
})

let ordenCargaSchema = new Schema({
  codigo: {type: Number, required: true},
  fecha: {type: Date, required: true},
  dirLocalidadDesde: {type:String, required: true},
  dirLocalidadHasta: {type: String, required: true},
  descripcionCarga: {type:String, required:true},
  peso:{type:Number, required:true},
  camion: {type: Schema.Types.ObjectId, ref: 'Camion', required: true},
  cliente: [clienteSchema]
});

;

moduel.exports = mongoose.model ('ordenCarga', ordenCargaSchema);
