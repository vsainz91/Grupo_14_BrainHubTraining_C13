const { name } = require("ejs");

module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.STRING
        },
        products_id: {
            type : dataTypes.INTEGER,
            foreignKey: true
        }
    }
    let config = {
        tableName : "categories",
        timestamps: false
    }
    let Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.course, {
            as: "products",
            foreignKey: "product_id"

        });
    }


    return Category;
}