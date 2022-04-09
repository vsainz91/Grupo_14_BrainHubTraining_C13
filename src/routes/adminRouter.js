const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');


router.get('/', adminController.index);


router.get('/cursos', adminProductsController.list);

router.get('/cursos/agregar', adminProductsController.productAdd);

router.post('/cursos', adminProductsController.productCreate);

router.get('/cursos/editar/:id', adminProductsController.productEdit);


module.exports = router;