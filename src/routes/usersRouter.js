const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require ('../middlewares/uploadAvatar');
const registerValidator = require ('../validations/registerValidator');


router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register',uploadFile.single('avatar'), registerValidator, usersController.processRegister)

module.exports = router;