const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const uploadFile = require('../middlewares/uploadProductImage')
const userSessionCheck = require('../middlewares/userSessionCheck');
const adminCheck = require ('../middlewares/adminCheck');

router.get('/', /* userSessionCheck, adminCheck, */ adminController.index);

/* CRUD PRODUCTOS */

router.get('/courses', /* userSessionCheck, adminCheck, */ adminProductsController.list);

router.get('/courses/add', /* userSessionCheck, adminCheck, */ adminProductsController.productAdd);

router.post('/courses', uploadFile.single('image'), adminProductsController.productCreate);

router.get('/courses/edit/:id', /* userSessionCheck, adminCheck, */ adminProductsController.productEdit);

router.put('/courses/:id', adminProductsController.productUpdate);

router.delete('/courses/delete/:id', adminProductsController.productDelete);

module.exports = router;