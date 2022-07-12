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
        db.Category.findAll()
        .then(categories => {
            res.render('admin/products/addProduct', {
                titulo: "Agregar curso",
                categories
            })
        })
    },
    productCreate: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Course.create({
                ...req.body, 
            }, {include: ['courseImage']})
            
            // if req.files para preguntar?
            .then((course) => {
                let courseImages = req.files.map(image => {
                    return {
                      image_name: image.filename,
                      course_id: course.id,
                    } 
                })
                db.CourseImage.bulkCreate(courseImages)
                .then(() => res.redirect('/admin/courses'))
                .catch(error => console.log(error))
            })                
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
        let course = db.Course.findByPk(courseId, {include: ['category']})
        let categories = db.Category.findAll()
        Promise.all([course, categories])
        .then(([course, categories]) => {
            res.render('admin/products/editProduct', {
                titulo: "Edición",
                course,
                categories
            })
        })
        .catch(error => console.log(error))
    },
    productUpdate: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.Course.update({
                ...req.body,
            },{
                where: {id: req.params.id}
            })
            .then(() => {
                res.redirect('/admin/courses');
            })
            .catch(error => res.send(error))

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

        db.CourseImage.destroy({
            where: {course_id: req.params.id}
        })
        .then(() => { 
            db.Course.destroy({
            where: {id: courseId}
            })
        })
        .then(() => res.redirect('/admin/courses'))
        .catch((error) => console.log(error))
    },
}


   