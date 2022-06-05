module.exports = function(sequelize, dataTypes){
    let alias = "Actor";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        }

    }
    let config = {
        tableName: "Actors",
        timestamps: false
    }
    let Actor = sequelize.define(alias, cols, config);
    return Actor;
}
//minuto 11 video PG