const { getProducts } = require('../data');


module.exports = {
    productDetail: (req, res) => {
        let courseId = +req.params.id;
        let courses = getProducts.find(course => course.id === courseId);
        res.render('products/productDetail', {
           titulo: "Detalle",
           courses
        })
    },
    productCart: (req, res) => {
        res.render('products/productCart', {
        titulo: "Carrito"
        })
    },
    index: (req, res) => {
        res.render('index', {
           titulo: "Homepage",
           products_title: "Cursos",
           courses: getProducts
        })
    },
};