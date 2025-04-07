const carroRouter = require('express').Router();
const carroController = require('../controllers/carroController');
const logMiddleware = require('../middleware/logger');
const authMiddleware = require('../middleware/auth');
const validarCarro = require('../middleware/carroValidator');


carroRouter.get('/carros', logMiddleware, carroController.visualizarCarros);
carroRouter.get('/carros/filtro', carroController.filtrarCarros);
carroRouter.get('/carros/:id', carroController.visualizarCarro);

carroRouter.post('/carros', authMiddleware, validarCarro, carroController.crearCarro);
carroRouter.put('/carros/:id', authMiddleware, validarCarro, carroController.actualizarCarro);
carroRouter.delete('/carros/:id', authMiddleware, carroController.eliminarCarro);

module.exports = carroRouter;