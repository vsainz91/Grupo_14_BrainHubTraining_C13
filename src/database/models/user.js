const { name } = require("ejs");
const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "user";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.VARCHAR(100)
        },

        email: {
            type : dataTypes.VARCHAR(100)
        },

        password: {
            type: dataTypes.VARCHAR(100)
        },

        avatar: {
            type: dataTypes.STRING // revisar//
        },

       
        course_id: {
            type : dataTypes.INTEGER(11),
            foreignKey :true
        },
        rol_id: {
            type : dataTypes.INTEGER(11),
            foreignKey :true//revisar
        }
    }
    let config = {
        tableName : "users",
        timestamps: false
    }
    let user = sequelize.define(alias, cols, config);

    user.associate = function (models) {
        user.belongsToMany(models.course, {
            as: "courses",
            through: "user_course",// revisar tabla intermedia//
            foreignKey: "user_id",
            otherKey: "course_id",
            timestamps: false

        });
    }

    return user;
}

