module.exports = function(sequelize, dataTypes){
    let alias = "Genero";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }

    }
    let config = {
        tableName: "genres",
        timestamps: false
    }
    let Genero = sequelize.define(alias, cols, config);
    return Genero;
}