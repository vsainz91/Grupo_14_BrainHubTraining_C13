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
        .isLength({min:8}).withMessage("La contraseña debe tener por lo menos 8 caracteres"),
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