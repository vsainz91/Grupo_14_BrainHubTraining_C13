const {check, body} = require('express-validator');
const {getUsers} = require('../data');

let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("email").custom((value, { req })=>{
        let user = getUsers.find(user => user.email === req.body.email);
        if(user.pass === req.body.pass){
            return true;
        }
        return false;
    }).withMessage("email o contraseña incorrecto"),
    check("pass")
        .notEmpty().withMessage("Ingrese una contraseña"),
];

module.exports = validateLogin;