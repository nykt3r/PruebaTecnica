const { body } = require('express-validator');

const validarCarro = [
    body('modelo').isString().isLength({ min: 1, max: 30 }).withMessage('Modelo inválido'),
    body('descripcion').isString().isLength({ max: 100 }).withMessage('Descripcion inválido'),
    body('precio').isDecimal({ min: 0, max: 999999999 }).withMessage('Precio inválido'),
    body('kilometraje').isInt({ min: 0 }).withMessage('Kilometraje inválido'),
    body('marcaId').isInt({ min: 1, max: 10 }).withMessage('ID de marca inválido')
];

module.exports = validarCarro;