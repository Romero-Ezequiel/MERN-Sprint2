/* Para realizar el routeo con express */
const {Router} = require('express');
const router = Router();
const bodyParser = require('body-parser');
/*Requiero el archivo citiesModel para poder obtener las ciudades
Obtener una sola ciudad, actualizar las ciudades y 
eliminar una ciudad de la base de datos para eso tengo que importar ese archivo
*/
const citiesModel = require('../citiesModel/citiesModel');
router.get('/all', (req, res) => {
    //Antes de devolver un mensaje voy hacer una consulta a la base de datos
    //Voy a consulta mi modelo de citiesModel y utilizo el metodo find()
    //Este metodo consulta todos los datos que tengo en la coleccion 
    //Simplemente estoy haciendo una busqueda a la base de datos, y como es una 
    //operación asincrona voy a tener que utilizar callback o sino utilizar promesas
    citiesModel.find((err, ciudades) => {
        if (err) {
            console.log('Error ciudades', err);
        }
        res.status(200).json({ ciudades: ciudades });
    })
});

router.route('/')
    //Si envio un mensaje 
    //.get((req, res)=> res.send('Petición - GET'))
    //Si envio un JSON en una petición GET
    //.get((req, res)=> res.json({mesaje: 'Petición - GET'}))
    .get(async (req, res)=> {
        //Como find() es una funcion asincrona utilizo await para especificar
        //que el codigo es asincrono
        const cities = await  citiesModel.find();
        res.json(cities);
        //res.json({mesaje: []})
    })
    .post((req, res)=> {
        console.log(req.body);
        //Aca le indico que quiero extraer y guardar en una constante, y 
        //luego lo muestro en consola
        const { pais } = req.body;
        console.log(pais); 
        //res.send({mensaje: 'Ciudades guardadas - POST'})
    })

router.route('/:id')
    .get(async (req, res)=> { 
        //Que busque en la Base de datos por id
        //Todas las operaciones a una base de datos es asincrono
        const citieid = await citiesModel.findById(req.params.id);
        console.log(`El pais y ciudad extraido de la coleccion es :${citieid}`);
        console.log(`Su id es ${req.params.id}`);
        res.json(citieid);
    })
    //Para actualizar un dato necesito dos cosas, el id y los datos de la ciudad
    //que quiero actualizar
    .put( (req, res)=> {
        console.log(req.params.id, req.body);
        citiesModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({mesaje: 'Ciudad actualizada'})
    })

    //Para eliminar tambien necesito un id especifico
    .delete(async (req, res)=> { 
        //
        await citiesModel.findByIdAndDelete(req.params.id)
        res.json({mesaje: 'Ciudades eliminadas'})
    })



/*
app.get('/city/:cityId', (req, res) => {
    let cityId = req.params.cityId
    cities.findById(cityId, (err, ciudades) => {
        if (err) return res.status(500).send({ message: 'Error al realizar peticion' })
        if (!ciudades) return res.status(404).send({ message: 'El producto no existe' })
        res.status(200).send({ ciudades })
    })
})
app.post('/city', (req, res) => {
    console.log('POST /city');
    console.log(req.body);
    let ciudad = new cities()
    ciudad.name = req.body.name;
    ciudad.country = req.body.country;
    ciudad.save((err, guardado) => {
        if (err) res.status(500).send({ message: 'Error al guardar' })
        res.status(200).send({ ciudad: guardado })
    })
})
app.put('/city/:cityId', (req, res) => {
    let cityId = req.params.cityId;
    let update = req.body;
    cities.findByIdAndUpdate(cityId, update, (err, ciudadActualizada) => {
        if (err) res.status(500).send({ message: 'Error al actualizar' });
        res.status(200).send({ ciudades: ciudadActualizada });
    })
})
app.delete('/city/:cityId', (req, res) => {
    let cityId = req.params.cityId;
    cities.findById(cityId, (err, ciudades) => {
        if (err) res.status(500).send({ message: 'Error al borrar' })
        city.remove(err => {
            if (err) res.status(500).send({ message: 'Error al borrar' });
            res.status(200).send({ message: 'Borrado' });
        })
    })
})
*/
module.exports = router;
