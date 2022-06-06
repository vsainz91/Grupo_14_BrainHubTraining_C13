module.exports = (sequelize, dataTypes) => {
    let alias = "productImage";

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

    const productImage = sequelize.define(alias, cols, config);

    productImage.associate = (models) => {
        productImage.belongsTo(models.product, {
            as: "product",
            foreingKey: "product_id"
        })
    }

    return productImage;
}