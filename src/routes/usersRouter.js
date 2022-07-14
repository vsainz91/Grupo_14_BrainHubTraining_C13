const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require ('../middlewares/uploadAvatar');
const registerValidator = require ('../validations/registerValidator');
const loginValidator = require ('../validations/loginValidator');
const userInSessionCheck = require('../middlewares/userInSessionCheck');
const userSessionCheck = require("../middlewares/userSessionCheck")

router.get('/login', userInSessionCheck, usersController.login);
router.post('/login', loginValidator, usersController.processLogin);
router.get('/register', userInSessionCheck, usersController.register);
router.post('/register',uploadFile.single('avatar'), registerValidator, usersController.processRegister);
router.get('/logout', usersController.logout);
router.get('/profile', userSessionCheck, usersController.profile);
router.put('/profile',uploadFile.single('avatar'), usersController.profileUpdate);


module.exports = router;