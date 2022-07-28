const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    categories: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.render('products/categories', {
                getCategories: categories,
                titulo: "Brainhub",
                session: req.session,
                toThousand
            })
        })
        .catch(errors => console.log(errors))
    },
    category: (req, res) => {
        db.Category.findByPk(req.params.id, {
            include : ['courses']
        })
        .then(category => {
            res.render('products/category',{
                category,
                courses: category.courses,
                titulo: "Brainhub",
                session: req.session,
                toThousand
            })
        })
        .catch(errors => console.log(errors))
    }
}