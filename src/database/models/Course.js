//const { name } = require("ejs");
//const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "Course";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.INTEGER(11)//revisar
        },

        price: {
            type : dataTypes.INTEGER(10)
        },

        description: {
            type: dataTypes.TEXT
        },

        instructor: {
            type: dataTypes.STRING,
        },

        practice_time: {
            type: dataTypes.INTEGER(10)
        },

        lessons: {
            type: dataTypes.INTEGER(10)
        },

        content_hours: {
            type: dataTypes.INTEGER(11)
        },

        /*image: {
            type: dataTypes.image // revisar NO ESTA EN DB//
        },*/

        category_id: {
            type : dataTypes.INTEGER(10),
            foreignKey :true
        }
    }
    let config = {
        tableName : "courses",
        timestamps: false
    }
    let Course = sequelize.define(alias, cols, config);
    
    Course.associate = function (models) {
        Course.belongsTo(models.Category, {
            as: "category",
            foreignKey: "product_id"

        });

        Course.belongsToMany(models.User, {
            ass: "users",
            through: "user_product",// revisar tabla intermedia//
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false

        });
    }
    
    return Course;
}