
module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        pass: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING
        },
        course_id: {
            type : dataTypes.INTEGER(11),
            foreignKey :true
        },
        rol_id: {
            type : dataTypes.INTEGER(11),
            foreignKey :true
        }
    }
    let config = {
        tableName : "users",
        timestamps: false
    }
    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsToMany(models.Course, {
            as: "courses",
            through: "users_courses", 
            foreignKey: "users_id",
            otherKey: "course_id",
            timestamps: false
        });
    }

    return User;
}
