//Aca voy a tener el codigo de la conexion de la base de datos
/** Utilizo mongoose para conectar la BD, la ventaja que nos da mongoose es
 * que es un ORM, un ORM es una biblioteca que nos permite modelar los datos
 * antes que los guardemos */  
const mongoose = require('mongoose');
// Creo una constante y le paso en donde tengo la BD en mongo Atlas
const URL = "mongodb+srv://eze:6E6e6H8HdyaunR3F@cluster0-s7zol.mongodb.net/registrarDB?retryWrites=true&w=majority";
// Creo una variable y le paso este objeto para poder conectar la BD con mongoose
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

const dbName = "registrarDB";
mongoose.connect(URL, dbConfig);
//Para escuchar la cadena de conexion a la base de datos
const connection = mongoose.connection;
//Cuando la conexion sea abierta quiero se que ejecute un mensaje en consola
connection.once('open', () => {
  console.log('La BD está conectada');
});