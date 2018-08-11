const mongoose = require('mongoose'); //its a package used to create Schemas and save it into a db
const uniqueValidator = require('mongoose-unique-validator'); //con esto mando mensajes al frontend de registros unicos
let mongooseHidden = require('mongoose-hidden')();

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El pass es necesario'],
        hide: true
    },

    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        required: false
    },
    google: {
        type: Boolean,
        default: false
    }

});

//we dont need to show parameter password to the user, lets do this


usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });
usuarioSchema.plugin(mongooseHidden);


module.exports = mongoose.model('Usuario', usuarioSchema);