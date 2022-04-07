const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* listar cursos */
router.get('/', productsController.getAll);
/* Ruta parametrizada de detalle del curso */
router.get('/productDetail/:id', productsController.getOne)
router.get('/productCart', productsController.getAll)


module.exports = router;