/**Para realizar el routeo con express */
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const citiesModel = require('../citiesModel/citiesModel');


router.get('/all', (req, res) => {
    citiesModel.find((err, ciudades) => {
        if (err) {
            console.log('Error ciudades', err);
        }
        res.status(200).json({ ciudades: ciudades });

    })
});

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



//cites.js que borre recien
//const express = require('express');
//Para configurar las rutas
const {Router} = require('express');
const router = Router();

router.route('/test') 
    .get((req, res) => res.send({ msg: 'Cities test route.' })
    .post()
    
);

router.route('/')
    .get((req, res)=> res.send('Hola mundo'));


/*router.route('/test/:id')
    .get()
    .put()
    .delete()


    module.exports = router



*/
module.exports = router;
