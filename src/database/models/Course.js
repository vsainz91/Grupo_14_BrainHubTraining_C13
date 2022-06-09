// const { name } = require("ejs");
// const { text } = require("express");

module.exports = function(sequelize, dataTypes){
    let alias = "Course";
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

        // image: {
        //     // type: dataTypes.image // revisar//
        // },

        category_id: {
            type : dataTypes.INTEGER,
            foreignKey :true
        }
    }
    let config = {
        tableName : "products",
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