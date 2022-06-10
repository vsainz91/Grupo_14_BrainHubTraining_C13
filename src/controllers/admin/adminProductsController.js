const { validationResult } = require('express-validator');
const db = require('../../database/models');
// const fs = require('fs');

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

        if (errors.isEmpty()) {
            db.Course.create({
                ...req.body,
                user_id: req.session.user.id, 
            })
            // if req.files para preguntar
            .then((course) => {
                db.CourseImage.create({
                    image_name: req.file.filename,
                    course_id: course.id
                })
            })                
            .then(() => res.redirect('/admin/courses'))
            .catch(error => console.log(error))
        }else {
            res.render('admin/products/addProduct', {
                titulo: "Agregar Curso",
                errors: errors.mapped(),
                old: req.body
            })
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
        let courseId = +req.params.id;

        db.CourseImage.findAll({
            where: {
              course_id: courseId,
            }
        })
        db.CourseImage.destroy({
            where: {
            course_id: req.params.id
            }
        })
        .then(() => { 
            db.Course.destroy({
            where: {
                id: courseId
                }
            })
        })
        .then(() => res.redirect('/admin/courses'))
        .catch((error) => console.log(error))
    },
}


   