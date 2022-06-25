const { getProducts } = require('../data');
const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        res.render('index', {
           titulo: "Homepage",
           products_title: "Cursos",
           cursos: getProducts,
           session: req.session
        })
     },
} 
