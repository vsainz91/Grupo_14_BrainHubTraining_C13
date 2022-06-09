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
        course_id: {
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
        Category.hasMany(models.Course, {
            as: "courses",
            foreignKey: "course_id"

        });
    }


    return Category;
}