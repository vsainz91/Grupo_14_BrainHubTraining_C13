
module.exports = function(sequelize, dataTypes){
    let alias = "Course";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10), 
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.TEXT('tiny')
        },

        price: {
            type : dataTypes.INTEGER(11)
        },

        description: {
            type: dataTypes.TEXT
        },

        instructor: {
            type: dataTypes.STRING,
        },

        practice_time: {
            type: dataTypes.INTEGER(10)
        },

        lessons: {
            type: dataTypes.INTEGER(10)
        },

        content_hours: {
            type: dataTypes.INTEGER(11)
        },
         
        category_id: {
            type : dataTypes.INTEGER(10),
            foreignKey :true
        },
    }
    let config = {
        tableName : "courses",
        timestamps: false
    }
    let Course = sequelize.define(alias, cols, config);
    
    Course.associate = function (models) {
        Course.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        });
/* 
        Course.belongsToMany(models.User, {
            as: "users",
            through: "users_courses",
            foreignKey: "course_id",
            otherKey: "user_id", 
            timestamps: false
        }); */
        Course.hasMany(models.CourseImage, {
            as: "courseImage",
            foreignKey: "course_id"
        });
    }
    
    return Course;
}