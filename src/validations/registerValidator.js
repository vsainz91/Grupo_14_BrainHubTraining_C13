const { check, body } = require('express-validator');
const db = require('../database/models')

let validateRegister = [
    check("name")
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min:2 }).withMessage('Ingrese un nombre válido'),
    check("email")
        .notEmpty().withMessage(" El e-mail es requerido").bail()
        .isEmail().withMessage("Ingrese un e-mail válido"),
    body("email").custom((value)=>{
        return db.User.findOne({
            where: {
                email: value,
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject("Email ya registrado")
            }
        })
    }),
    check("pass")
        .notEmpty().withMessage("Ingrese una contaseña")
        .isLength({min:6, max:12}).withMessage("La contraseña debe tener entre 6 y 12 caracteres")
        .isAlphanumeric(),
    check("password2")
        .notEmpty().withMessage("Repita su contraseña"),
    body("password2").custom((value, {req}) => {
        if (value !== req.body.pass){
            return false;
        }
        return true;
    }).withMessage("Las contraseñas no coinciden")

    // 
];

module.exports = validateRegister;