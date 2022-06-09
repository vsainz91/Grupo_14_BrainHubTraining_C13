//const { name } = require("ejs");
//const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.STRING,
        },

        email: {
            type : dataTypes.STRING,
        },

        password: {
            type: dataTypes.STRING,
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
    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsToMany(models.Course, {
            as: "courses",
            through: "user_course",// revisar tabla intermedia//
            foreignKey: "user_id",
            otherKey: "course_id",
            timestamps: false

        });
    }

    return User;
}

