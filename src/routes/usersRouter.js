const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require ('../middlewares/uploadAvatar');


router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register',uploadFile.single('avatar') ,usersController.processRegister)

module.exports = router;