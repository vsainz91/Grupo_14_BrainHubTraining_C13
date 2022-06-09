const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// // Creacion
// router.get("/addProduct", productsController.productAdd);

// router.post("/addProduct", productsController.guardado);

/* listar cursos */
router.get('/', productsController.index);

/* Ruta parametrizada de detalle del curso */
router.get('/detail/:id', productsController.productDetail);

router.get('/cart', productsController.productCart);


module.exports = router;