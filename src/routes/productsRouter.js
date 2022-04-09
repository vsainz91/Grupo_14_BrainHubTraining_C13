const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* listar cursos */
router.get('/', productsController.getAll);

/* Ruta parametrizada de detalle del curso */
router.get('/productdetail/:id', productsController.productDetail);
router.get('/productCart', productsController.productCart);


module.exports = router;