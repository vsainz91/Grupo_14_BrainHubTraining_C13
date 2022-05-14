const {check, body} = require('express-validator');
const {getUsers} = require('../data');
const bcrypt = require('bcryptjs');

let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("custom").custom((value, { req })=>{
        let user = getUsers.find(user => user.email === req.body.email);
        if(bcrypt.compareSync(req.body.pass, user.pass)) {
            return true;
        }
        return false;
    }).withMessage("Email o contraseña incorrecto"),
    check("pass")
    .notEmpty().withMessage("Ingrese una contraseña válida"),
];

module.exports = validateLogin;