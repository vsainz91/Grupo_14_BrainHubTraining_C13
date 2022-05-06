const {getUsers, writeUsers} = require('../data');
const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            titulo: "Login",
            session: req.session
        })
    }, 
    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let user = getUsers.find(user => user.email === req.body.email);
            
            req.session.user = {
                id: getUsers.id,
                name: getUsers.name,
                avatar: getUsers.avatar,
                email: getUsers.email

            }
            res.locals.user = req.session.user

            
            
            res.redirect('/')
        }else{
            res.render('users/login', {
                titulo: "Login",
                errors: errors.mapped(),
                session: req.session
            })

        }
    },
    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registro",
            session: req.session
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
            avatar: req.file ? req.file.filename : "default-image.jpg",
            rol: "USER"
        }
        getUsers.push(newUser)
        writeUsers(getUsers)
        res.redirect('/users/login')
    } else {
        res.render('users/register', {
            titulo: "Registro",
            errors: errors.mapped(),
            session: req.session
        })
        }
    }     
        
}