const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const uploadFile = require('../middlewares/uploadProductImage')

router.get('/', adminController.index);

/* CRUD PRODUCTOS */

router.get('/courses', adminProductsController.list);

router.get('/courses/add', adminProductsController.productAdd);

router.post('/courses', uploadFile.single('image') ,adminProductsController.productCreate);

router.get('/courses/edit/:id', adminProductsController.productEdit);

router.put('/courses/:id', adminProductsController.productUpdate);

router.delete('/courses/delete/:id', adminProductsController.productDelete);

module.exports = router;