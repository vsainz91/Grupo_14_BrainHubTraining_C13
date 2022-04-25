const { getProducts, writeProducts } = require('../../data');

module.exports = {
    list: (req, res) => {
        res.render('admin/products/listProducts', {
            titulo: "Listado de cursos",
            course: getProducts
        })
    },
    productAdd: (req, res) => {
        res.render('admin/products/addProduct', {
            titulo: "Agregar curso"
        })
    },
    productCreate: (req, res) => {
        let lastId = 0;
        getProducts.forEach(course => {
            if(course.id > lastId){
                lastId = course.id;
            }
        });

        let newCourse = {
            ...req.body, 
            id: lastId + 1,
        }
        getProducts.push(newCourse)
        writeProducts(getProducts)
        res.redirect('/admin/courses')
    },

    productEdit: (req, res) => {
        let idCurso = +req.params.id;

        let course = getProducts.find(course => course.id === idCurso)

        res.render('admin/products/editProduct', {
            titulo: "Edición",
            course
        })
    },
    productUpdate: (req, res) => {
        let idCurso = +req.params.id;
        
        getProducts.forEach(course => {
            if(course.id === idCurso){
                course.name = req.body.name
                course.price = req.body.price
                course.categoryId = req.body.categoryId
                course.description = req.body.description
            }
        });
        writeProducts(getProducts);
        res.redirect('/admin/courses');
    },
    productDelete: (req, res) => {
        let idCurso = +req.params.id;
        
        getProducts.forEach(course => {
            if(course.id === idCurso){
                
                let courseToDeleteIndex = getProducts.indexOf(course);
                
                getProducts.splice(courseToDeleteIndex, 1)
            }
        })
        
        writeProducts(getProducts);
        
        res.redirect('/admin/courses')
    }
}