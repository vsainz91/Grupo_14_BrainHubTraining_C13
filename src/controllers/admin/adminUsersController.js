const { User, Sequelize } = require('../../database/models')
let fs = require('fs')
let path = require('path')
const { Op } = require('sequelize')

module.exports = {
    users :(req, res) => {
        User.findAll()
        .then( users => {
            res.render('admin/adminUsers', {
                users,
                titulo: "Admin Users",
                session: req.session
            })
        })
        .catch(error => console.log(error))
    },
    userEdit : (req, res) =>{
        let { rol } = req.body
            User.update({
                rol
            },
            { where: { id : req.params.id}})
            .then(() => {
                res.redirect('/admin/users')
            })
            .catch(error => console.log(error))
    },
    userDelete : (req, res) => {
        User.findByPk(req.params.id)
        .then(user => {
            User.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                if (fs.existsSync(path.join(__dirname, "../../public/images/avatars", user.avatar)) &&
                    user.avatar !== "default-image.png"){
                    fs.unlinkSync( path.join(__dirname, "../../public/images/avatars", user.avatar))
                }
            })
            .catch(error => console.log(error))
            res.redirect('/admin/users')
        })
        .catch(error => console.log(error))
    },
    userSearch : (req, res) => {
        let search = req.query.search
        User.findAll({
            where: {
                rol_id: {[Sequelize.Op.substring]: search}
            }
        })
        .then(users => {
            res.render('admin/adminUsers',{
                users,
                search,
                titulo: "Admin Users",
                session: req.session
            })
        })
    }
}