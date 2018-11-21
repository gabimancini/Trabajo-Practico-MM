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

module.exports = mongoose.model ('Cliente', clienteSchema);
