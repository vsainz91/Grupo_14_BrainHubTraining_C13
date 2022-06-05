module.exports = function(sequelize, dataTypes){
    let alias = "Pelicula";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },

        rating: {
            type: dataTypes.DOUBLE
        }, 
        genre_id: {
            type: dataTypes.INTEGER
        },

    }
    let config = {
        tableName: "movies",
        timestamps: false
    }
    let Pelicula = sequelize.define(alias, cols, config);
    return Pelicula;
}