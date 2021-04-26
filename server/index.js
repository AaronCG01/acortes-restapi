//Se incluye cors
const cors = require('cors');

//Se incluye express
const express = require('express');

//Se incluye el archivo de las rutas provenientes de 'routes/index.js'
const routes = require('../routes');

const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());
server.use('/api', routes);

//Se exporta el objeto server para poder ser usado
module.exports = server;

