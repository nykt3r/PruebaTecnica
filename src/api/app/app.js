const express = require('express');
const carroRouter = require("../routes/carroRoutes");
const usuarioRouter = require("../routes/usuarioRoutes");
const errorHandler = require('../middleware/errorHandler');

//const cors = require('cors');
//require('dotenv').config();

const app = express();

//app.use(cors());
app.use(express.json());
app.use('/api', carroRouter);
app.use('/usuario', usuarioRouter);
//Manejador de errores
app.use(errorHandler);

module.exports = app;