const { getProducts } = require('../data');
let bd = require("../database/models");


module.exports = {
    productDetail: (req, res) => {
        let courseId = +req.params.id;
        let courses = getProducts.find(course => course.id === courseId);
        res.render('products/productDetail', {
           titulo: "Detalle",
           courses,
           session: req.session
        })
    },
    productCart: (req, res) => {
        res.render('products/productCart', {
        titulo: "Carrito",
        session: req.session
        })
    },
    index: (req, res) => {
        res.render('index', {
           titulo: "Homepage",
           products_title: "Cursos",
           courses: getProducts,
           session: req.session
        })
    },
    crear: function (req, res){
        db.category.findAll()
        .then(function(category) {
            return res.render('products/createProducts', {category:category}) //revisar, addProducts//
        })

    },
    guardado: function (req, res){
        db.course.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            instructor: req.body.instructor,
            practice_time: req.body.practice_time ,
            lessons: req.body.lessons,
            content_hours: req.body.content_hours,
            image: req.body.image, 
            category_id: req.body.category ,


        });
        res.redirect('/products');
    },
    //listado: function (req, res){
        //db.courses.findAll()
        //.then(function(courses){
           // res.render('productsList', {courses:courses})
       // })
    //}
};