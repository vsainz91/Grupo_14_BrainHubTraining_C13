const { name } = require("ejs");
const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.STRING
        },

        price: {
            type : dataTypes.INTEGER(10)
        },

        description: {
            type: dataTypes.TEXT
        },

        instructor: {
            type: dataTypes.VARCHAR(100)
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

        image: {
            type: dataTypes.image // revisar NO ESTA EN DB//
        },

        category_id: {
            type : dataTypes.INTEGER(10),
            foreignKey :true
        }
    }
    let config = {
        tableName : "products",
        timestamps: false
    }
    let course = sequelize.define(alias, cols, config);
    
    course.associate = function (models) {
        course.belongsTo(models.category, {
            as: "category",
            foreignKey: "product_id"

        });

        course.belongsToMany(models.user, {
            ass: "users",
            through: "user_product",// revisar tabla intermedia//
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false

        });
    }
    
    return product;
}