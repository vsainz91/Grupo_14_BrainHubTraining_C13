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
    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registro",
            session: req.session
        })
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                rol_id: 2,
                pass: bcrypt.hashSync(req.body.pass, 10),
                avatar: req.file ? req.file.filename : "default-image.png"
            })
                .then((user) => {
                    res.redirect("/users/login")
                })
                .catch(error => res.send(error))
        } else {
            res.render('users/register', {
                titulo: "Registro",
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            });
        }
    },
    profile: (req, res) => {
        db.User.findOne({
            where: {
                id: req.session.user.id
            },
        })
        .then((user) => {
            res.render("users/profile", {
                session: req.session,
                user,
                titulo: req.session.user.name,
            })
        })
    },
    profileUpdate: (req, res) => {
    let errors = validationResult(req);

        if(errors.isEmpty()){
            db.User.update({
                ...req.body
            },{
                where: {
                    id: req.session.user.id
                }
            })
            .then(() => 
                res.redirect("/users/profile")
            )
            .catch(error => res.send(error))
        }else{
            db.User.findOne({
                where: {
                    id: req.session.user.id
                },
            })
            .then((user) => {
                res.render("users/profile", {
                    session: req.session,
                    user,
                    title: req.session.user.name,
                    errors: errors.mapped()
                })
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();

        if (req.cookies.brainhubCookie) {
            res.cookie('brainhubCookie', "", { maxAge: -1 })
        }

        res.redirect('/')
    }
}


