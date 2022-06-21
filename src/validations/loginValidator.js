const {check, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("custom").custom((value, { req }) => {
        return db.User.findOne({
            where: {
                email: req.body.email,
            }
        }).then((user)=>{
            if(!bcrypt.compareSync(req.body.pass, user.pass)){
                return Promise.reject()
            }
        })
        .catch((error)=>{
            return Promise.reject("Email o contraseña incorrecto")
        })
    }),
    check("pass")
    .notEmpty().withMessage("Ingrese una contraseña válida"),
];

module.exports = validateLogin;