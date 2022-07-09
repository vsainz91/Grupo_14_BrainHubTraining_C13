const { check, body } = require('express-validator');
const db = require('../database/models')

let validateProduct = [
    check('name')
    .notEmpty().withMessage("El nombre del producto es requerido").bail()
    .isLength({ min:5 }).withMessage('Ingrese un nombre válido'),
    check('description')
    .notEmpty().withMessage("Debe introducir una descripción").bail()
    .isLength({ min:20 }).withMessage('La descripción debe tener al menos 20 caracteres')
]


module.exports = validateProduct;