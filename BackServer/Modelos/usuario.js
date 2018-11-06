let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

  nombre: { type: String, required: [true, 'El nombre es necesario']},
  email: {type: String, unique: true, required: [true, 'El correo es necesario'] },
  password: {type: String, required: [true, 'El password es necesario'] },
  img: {type: String, required:false},
  rol: {type: String, required: true, default:'USER_ROLE' }
});

module.exports = mongoose.model('Usuario', usuarioSchema );
