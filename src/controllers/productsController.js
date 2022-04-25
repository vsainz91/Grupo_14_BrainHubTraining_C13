const { getProducts } = require('../data');


module.exports = {
    productDetail: (req, res) => {
        res.render('productDetail', {
           titulo: "Detalle",
           course: getProducts
        })
    },
    productCart: (req, res) => {
        res.render('productCart', {
        titulo: "Carrito"
        })
    },
    index: (req, res) => {
        res.render('index', {
           titulo: "Homepage",
           products_title: "Cursos",
           course: getProducts
        })
    },
};