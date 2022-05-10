const express = require('express');
//const { route } = require('express/lib/application');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require ('../middlewares/uploadAvatar');
const registerValidator = require ('../validations/registerValidator');
const loginValidator = require ('../validations/loginValidator');
const userInSessionCheck = require('../middlewares/userInSessionCheck');











router.get('/login', userInSessionCheck, usersController.login);
router.post('/login', loginValidator, usersController.processLogin);
router.get('/register', userInSessionCheck, usersController.register);
router.post('/register',uploadFile.single('avatar'), registerValidator, usersController.processRegister);
router.get('/logout', usersController.logout);


module.exports = router;