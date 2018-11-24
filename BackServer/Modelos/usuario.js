let mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos = {
  values: ['ADMIN_ROLE', 'EMPLEADO_ROLE', 'EMPLEADOR_ROLE'],
  message: '{VALUE} no es un rol valido'
};

let usuarioSchema = new Schema({

  email: {type:String, unique:true, required:[true, 'El correo es necesario']},
  
  password: {type: String, required: [true, 'El password es necesario'] },
  rol: {type: String, required: true, enum: rolesValidos }
});

usuarioSchema.plugin(uniqueValidator, { message: 'El legajo debe ser unico'});

module.exports = mongoose.model('Usuario', usuarioSchema );
