const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const uploadFile = require('../middlewares/uploadProductImage')
const userSessionCheck = require('../middlewares/userSessionCheck');
const adminCheck = require ('../middlewares/adminCheck');
const productsValidator = require ('../validations/productsValidator');

router.get('/', userSessionCheck, adminCheck, adminController.index);

/* CRUD PRODUCTOS */

router.get('/courses', userSessionCheck, adminCheck, adminProductsController.list);

router.get('/courses/add', userSessionCheck, adminCheck, productsValidator, adminProductsController.productAdd);

router.post('/courses', uploadFile.single('courseImage'), adminProductsController.productCreate);

router.get('/courses/edit/:id', userSessionCheck, adminCheck, productsValidator, adminProductsController.productEdit);

router.put('/courses/:id', adminProductsController.productUpdate);

router.delete('/courses/delete/:id', adminProductsController.productDelete);

module.exports = router;