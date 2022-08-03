const db = require('../database/models');
const {Op} = require('sequelize')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

module.exports = {
    index: (req, res) => {
		db.Course.findAll({
			include: ["courseImage"],
		})
		.then(courses => {
			let idiomas = courses.filter((course) => course.category_id === 1);
			let programacion = courses.filter((course) => course.category_id === 2);
			res.render('index', {
				titulo: "Brainhub",
				products_title: "Cursos",
				courses,
				idiomas,
				programacion,
				session: req.session,
				toThousand
			})
		})     
    },

    search: (req, res) => {
		let busqueda = req.query.search.toLowerCase()
        db.Course.findAll({
			include: ["courseImage"],
			where: {
				[Op.or]: [
					{ name: {[Op.substring]: busqueda}},
					{ description: {[Op.substring]: busqueda}}
				]
			}
		})
        .then(courses => {
            res.render('products/productResults',{
                courses,
                busqueda,
				toThousand,
				session: req.session
            })
        })
        .catch(errors => console.log(errors)) 
	},
} 
