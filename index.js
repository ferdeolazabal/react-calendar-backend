const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors({ origin: true }))

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Morgan
app.use(morgan('dev'));

// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});