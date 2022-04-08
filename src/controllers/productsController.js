const { getProducts } = require('../data');


module.exports = {
    productDetail: (req, res) => {
        res.render('productDetail', {
           titulo: "Detalle",
           
        })
    },
    getAll: (req, res) => {
        /* res.set({'content-type':'text/plain;charset=utf-8'})
        getProducts.forEach((course) => {
            res.write(
            `*****************
${course.name}
${course.price}
${course.description}
`)
        })
        res.end() */
    },
    getOne: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        let idCurso = +req.params.id; 
        
        let course = getProducts.find((course) => course.id === idCurso) 
        
        if(course){
            res.write("Detalle del curso\n") 
            res.write(`Nombre: ${course.name}\n`)
            res.write(`Precio: ${course.price}\n`)
            res.write(`Descripción: ${course.description}\n`)
        } else {
            res.write("Curso no existe")
        }
        res.end()
    },
    productCart: (req, res) => {
        res.render('productCart', {
        titulo: "Carrito"
        })
    }
};