const { name } = require("ejs");
const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "user";
    let cols = {
        id: {
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.STRING // firts name and last name//
        },

        email: {
            type : dataTypes.STRING
        },

        password: {
            type: dataTypes.INTEGER //revisar//
        },

        avatar: {
            type: dataTypes.STRING // revisar//
        },

       
        course_id: {
            type : dataTypes.INTEGER,
            foreignKey :true
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