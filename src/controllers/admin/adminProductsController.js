// const { getProducts, writeProducts } = require('../../data');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const fs = require('fs');

module.exports = {
    list: (req, res) => {
        db.Course.findAll()
        .then(courses => {
        res.render('admin/products/listProducts', {
            titulo: "Listado de cursos",
            course: courses,
        })
      })
    },
    productAdd: (req, res) => {
        res.render('admin/products/addProduct', {
            titulo: "Agregar curso"
        })
    },
    productCreate: (req, res) => {
        let errors = validationResult(req);
        // let lastId = 0;
        if (errors.isEmpty()) {
            db.Course.create({
                ...req.body,
                user_id: req.session.user.id, 
            })
            .then(() => res.redirect('/admin/courses'))
            .catch(error => console.log(error))
            /* getProducts.forEach(courses => {
                if (courses.id > lastId) {
                    lastId = courses.id;
                }
            });

            let newCourse = {
                ...req.body,
                id: lastId + 1,
                image: req.file ? req.file.filename : "default-image.png",
            }
            getProducts.push(newCourse)
            writeProducts(getProducts)
            res.redirect('/admin/courses') */
        }
    },
    productEdit: (req, res) => {
        let courseId = +req.params.id;

        db.Course.findByPk(courseId)
      .then(course => {
        res.render('admin/products/editProduct', {
            titulo: "Edición",
            course
        })
      })
      .catch(error => console.log(error))
    },
    productUpdate: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.Course.update({
                ...req.body,
                user_id: req.session.user.id,
            })

        writeProducts(getProducts);
        res.redirect('/admin/courses');

    }else{
        let courseId = +req.params.id;

        db.Course.findByPk(courseId)
        .then(course => {
          res.render('admin/products/editProduct', {
            titulo: "Editar Curso",
            course,
            errors: errors.mapped(),
            old: req.body
          })
        })
        .catch(error => console.log(error))
      }
    },
    productDelete: (req, res) => {
        let idCurso = +req.params.id;

        getProducts.forEach(course => {
            if (course.id === idCurso) {

                let courseToDeleteIndex = getProducts.indexOf(course);

                getProducts.splice(courseToDeleteIndex, 1)
            }
        })

        writeProducts(getProducts);

        res.redirect('/admin/courses')
    },
}


   