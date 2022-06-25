const { Op } = require('Sequelize');
const db = require('../database/models');

const adminCheck = (req, res, next)=>{
    // if(req.session.user.id === "ADMIN"){
    //     next()
    // }else{
    //     res.send("No tienes permiso para ingresar")
    // }
    db.User.findOne({
        where: {
            rol_id : {
                [db.Sequelize.Op.eq] : 2
            }
        }
    })
    .then(() => {
        if(req.session.user.rol === 2){
            next()
        }else{
            res.redirect('/')
        }
    })
    .catch((error) => res.send(error))
}

module.exports = adminCheck;