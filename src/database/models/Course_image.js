module.exports = (sequelize, dataTypes) => {
    let alias = "CourseImage";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image_name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    };

    let config = {
        tableName: "products_images",
        timestamps: false,
    };

    const CourseImage = sequelize.define(alias, cols, config);

    CourseImage.associate = (models) => {
        CourseImage.belongsTo(models.Course, {
            as: "product",
            foreingKey: "product_id"
        })
    }

    return CourseImage;
}