const { getProducts } = require('../data');
const db = require('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

module.exports = {
    index: (req, res) => {
        res.render('index', {
           titulo: "Homepage",
           products_title: "Cursos",
           cursos: getProducts,
           session: req.session
        })
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
			toThousand
		})
	},
} 
