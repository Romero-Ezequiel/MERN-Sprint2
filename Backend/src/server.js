/**  Requiero express para poder realizar el servidor y hacer
la comunicación entre el cliente y servidor **/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/**La biblioteca cors es importante para comunicar el servidor del backend(que se
 * encarga de las APIs)
 * y el servidor del frontend(que se encarga de realizar la interfaz de usuario)
 */
//Para mostrar el mensaje de la base de datos en consola voy a importar desde el 
//server el archivo database.js y con esto voy a inicar mi base de datos
require('./database.js');

//Ejecuto express y lo guardo en una variable app, este app es nuestro servidor
const app = express();
const port = process.env.PORT || 5000;
/*Creo una variable port para asignarle un puerto utilizo 
process.env.PORT || 5000 para: indicarle en caso que exista un puerto definido
por una variable de entorno lo va asignar, sino existe le va a indicar 
por defecto el puerto 5000. Esto sirve mucho para poder desplegar la app 
en un servicio de la nube como heroku por lo general los servicios de la nube 
nos dan un puerto una variable PORT que almacena un numero extenso aleatorio para
que la app este alli almacenada. La razon es que esas nubes utilizan bastantes
aplicaciones almacenadas y por eso de utiliza las variables de entorno
*/

//Configuro la escucha del servidor
app.listen(port, () => {
  console.log(`El server esta funcionando en  http://localhost:${port}`)
});

//Configuro los middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


//realizo una peticiones get normal de prueba y envio un objeto
app.get('/test', (req, res)=>{ 
  prueba = { "mensaje": "ruta de prueba" };
  res.send(prueba);
});

//Utilizo routing utilizo app.use porque estoy haciendo uso de otra logica
app.use('/cities', require('./models/citiesRouter/citiesRouter.js'));

/*

//routes estos son los enrutadores
app.use('/cities', require('./router/cities'))


/*
app.get("/cities/all", (req, res) => {
  if(res.status(200)){
    ciudades.find(function (err, cities) {
      if (err) {
        return console.error(err);
      }
      console.log(cities);
      res.json(cities);
    });
  }
});

*/




  

