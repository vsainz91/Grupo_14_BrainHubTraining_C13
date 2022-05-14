const {getUsers, writeUsers} = require('../data');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

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
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                email: user.email,
                rol: user.rol
            }
            
            if(req.body.remember){
                const TIME_IN_MILISECONDS = 120000;
                res.cookie('brainhubCookie', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }
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
            pass: bcrypt.hashSync(req.body.pass, 10),
            avatar: req.file ? req.file.filename : "default-image.png",
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
    },
    logout: (req, res) => {
        req.session.destroy();

        if(req.cookies.brainhubCookie){
            res.cookie('brainhubCookie', "", { maxAge: -1 })
        }

        res.redirect('/')
    }   
        
}