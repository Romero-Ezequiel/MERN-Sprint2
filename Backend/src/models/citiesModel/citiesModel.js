const mongoose = require('mongoose');

const cityEsquema = mongoose.Schema({
    pais: String,
    ciudad: String,
});
//model modela los datos 
module.exports = mongoose.model('ciudades', cityEsquema);