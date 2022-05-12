const { getProducts } = require('../data');

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
