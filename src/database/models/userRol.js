module.exports = (sequelize, dataTypes) => {
    let alias = "userRol";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        rol_name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    };

    let config = {
        tableName: "users_rols",
        timestamps: false,
    };

    const userRol = sequelize.define(alias, cols, config);

    userRol.associate = (models) => {
        userRol.hasMany(models.user, {
            as: "users",
            foreignKey: "rol_id"
        })
    }

    return userRol;
}