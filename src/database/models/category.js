module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName : "categories",
        timestamps: false
    }
    let Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Course, {
            as: "courses",
            foreignKey: "category_id"
        });
    }

    return Category;
}