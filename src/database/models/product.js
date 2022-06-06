const { name } = require("ejs");
const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "product";
    let cols = {
        id: {
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.STRING
        },

        price: {
            type : dataTypes.INTEGER
        },

        description: {
            type: dataTypes.TEXT
        },

        instructor: {
            type: dataTypes.STRING
        },

        practice_time: {
            type: dataTypes.INTEGER
        },

        lessons: {
            type: dataTypes.INTEGER
        },

        content_hours: {
            type: dataTypes.INTEGER
        },

        image: {
            type: dataTypes.image // revisar//
        },

        category_id: {
            type : dataTypes.INTEGER,
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