const { getProducts } = require('../data');
const db = require('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

module.exports = {
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
		/* db.CourseImage.findAll()
		.then(images => {
			res.render('index', {
				images,
				session: req.session,
			})
		}) */
        
    },
    search: (req, res) => {
		let searchResult = [];
		getProducts.forEach(course => {
			if(removeAccents(course.name/* .toLowerCase() */).includes(req.query.keywords/* .toLowerCase() */)){
				searchResult.push(course)
			}
		});
		
		res.render('products/productResults', {
			searchResult,
			keyword: req.query.keywords,
			toThousand,
			session: req.session
		})
	},
} 
