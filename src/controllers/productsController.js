const { getProducts } = require('../data');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

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
        db.Course.findAll()
		.then(courses => {
			res.render('index', {
				titulo: "Brainhub",
				products_title: "Cursos",
				courses,
				session: req.session,
                toThousand
			})
		})
    }
};