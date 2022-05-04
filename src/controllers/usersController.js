const {getUsers, writeUsers} = require('../data');
const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            titulo: "Login"
        })
    }, 
    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registro"
        })
    }, 
    processRegister: (req, res) => {

        let errors = validationResult(req);
        

        if(errors.isEmpty()){

            let lastId = 0;
        getUsers.forEach(user => {
            if(user.id > lastId){
                lastId = user.id
            }
        });

        let newUser = {
            id: lastId + 1,
            name: req.body.name,
            email: req.body.email,
            password: req.body.pass,
            avatar: req.file ? req.file.filename : "default-image.jpg"
        }
        getUsers.push(newUser)
        writeUsers(getUsers)
        res.redirect('/users/login')
    } else {
        res.render('users/register', {
            titulo: "Registro",
            errors: errors.mapped()
        })
        }
    }     
        
}