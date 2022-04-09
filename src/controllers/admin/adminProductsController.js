const { getProducts, writeProducts } = require('../../data');

module.exports = {
    list: (req, res) => {
        res.render('admin/products/listProduct', {
            titulo: "Listado de cursos",
            productos: getProducts
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

        let newProduct = {
            ...req.body, 
            id: lastId + 1,
        }
        getProducts.push(newProduct)
        writeProducts(getProducts)
        res.redirect('admin/cursos')
    },

    productEdit: (req, res) => {
        let idCurso = +req.params.id;

        let curso = getProducts.find(curso => curso.id === idCurso)

        res.render('admin/products/editProduct', {
            titulo: "Edición",
            curso
        })
    }
}