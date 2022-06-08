const { name } = require("ejs");

module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.VARCHAR(100)
        },
        products_id: {//CAMBIAR POR COURSE
            type : dataTypes.INTEGER(11),
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