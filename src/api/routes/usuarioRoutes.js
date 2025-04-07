const usuarioRouter = require('express').Router();
const usuarioController = require('../controllers/usuarioController');

usuarioRouter.post('/registrar', usuarioController.registrarUsuario);
usuarioRouter.post('/ingresar', usuarioController.ingresarUsuario);

module.exports = usuarioRouter;