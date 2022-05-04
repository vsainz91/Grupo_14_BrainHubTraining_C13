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
        getProducts.forEach(courses => {
            if(courses.id > lastId){
                lastId = courses.id;
            }
        });

        let newCourse = {
            ...req.body, 
            id: lastId + 1,
            image: req.file ? req.file.filename:"default-image.png" ,
        }
        getProducts.push(newCourse)
        writeProducts(getProducts)
        res.redirect('/admin/courses')
    },

    productEdit: (req, res) => {
        let courseId = +req.params.id;

        let courses = getProducts.find(courses => courses.id === courseId)

        res.render('admin/products/editProduct', {
            titulo: "Edición",
            courses
        })
    },
    productUpdate: (req, res) => {
        let idCurso = +req.params.id;
        
        getProducts.forEach(courses => {
            if(courses.id === idCurso){
                courses.name = req.body.name
                courses.price = req.body.price
                courses.categoryId = req.body.categoryId
                courses.description = req.body.description
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