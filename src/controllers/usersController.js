// const {getUsers, writeUsers} = require('../data');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

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
            //Levantar sesión
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar,
                    email: user.email,
                    rol: user.rol_id
                }
                
                if(req.body.remember){
                    const TIME_IN_MILISECONDS = 120000;
                    res.cookie('brainhubCookie', req.session.user, {
                        expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                        httpOnly: true,
                        secure: true
                    })
                }

                res.locals.user = req.session.user
                res.redirect('/')
            })
            .catch(error => console.log(error))
        }else{
            res.render('users/login', {
                titulo: "Login",
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    profile: (req, res) => {
        res.render('users/profile', {
            titulo: "Profile",
            session: req.session
        })
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