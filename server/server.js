require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Configuracion global de rutas
app.use(require('./routes/index'))

//Conexion con la bd mongoDB, es importante que este aqui ! debajo de los const y app.use

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos Online');
});








app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT} `);
});