const mongoose = require('mongoose');
//Una vez que tengo el schema definido puedo crear un model, estos 
//Schema lo tengo que guardar en una constante
const cityEsquema = mongoose.Schema({
    pais: String,
    ciudad: String,
});
//model modela los datos 
module.exports = mongoose.model('ciudades', cityEsquema);