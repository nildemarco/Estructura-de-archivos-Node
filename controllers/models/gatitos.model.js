const mongoose = require('mongoose');


const gatitosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: Number,
    descripcion: String,
    disponible: {
        type: Boolean,
        default: false
    }

})

const Gatito = mongoose.model('Gatito', gatitosSchema, 'gatitos');

module.exports = Gatito;
