const {check, body} = require('express-validator');
const {getUsers} = require('../data');

let validateLogin=[

check("email")
    .notEmpty().withMessage(" El e-mail es requerido").bail()
    .isEmail().withMessage("Ingrese un e-mail válido"),
body("email").custom((value, {req})=>{
    let user = users.find(user => user.email === value );
    if(user.pass === req.body.pass){
        return true;
    }
    return false;
}).withMessage ("e-mail o contraseña incorrecto"),



check("pass")
    .notEmpty().withMessage("Ingrese una contaseña"),
    

];
module.exports = validateLogin;