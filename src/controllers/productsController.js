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
            return res.render('products/listProducts', {category:category}) //revisar//
        })

    }
};