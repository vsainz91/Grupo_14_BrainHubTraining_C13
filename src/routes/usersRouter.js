const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require ('../middlewares/uploadAvatar');
const registerValidator = require ('../validations/registerValidator');
const loginValidator = require ('../validations/loginValidator');



router.get('/login', usersController.login);
route.post('/login', loginValidator, usersController.processLogin);
router.get('/register', usersController.register);
router.post('/register',uploadFile.single('avatar'), registerValidator, usersController.processRegister)

module.exports = router;