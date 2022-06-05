const { name } = require("ejs");

module.exports = function(sequelize, dataTypes){
    let alias = "category";
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
            foreignKey :true
        }
    }
    let config = {
        tableName : "categories",
        timestamps: false
    }
    let category = sequelize.define(alias, cols, config);

    category.associate = function (models) {
        category.hasMany(models.course, {
            as: "courses",
            foreignKey: "course_id"

        });
    }


    return category;
}