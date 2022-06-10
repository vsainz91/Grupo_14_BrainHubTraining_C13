module.exports = (sequelize, dataTypes) => {
    let alias = "CourseImage";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        course_id: {
            type : dataTypes.INTEGER(11),
            foreignKey: true
        }
        
    };

    let config = {
        tableName: "course_images",
        timestamps: false,
    };

    const CourseImage = sequelize.define(alias, cols, config);

    CourseImage.associate = (models) => {
        CourseImage.belongsTo(models.Course, {
            as: "course",
            foreingKey: "course_id"
        })
    }

    return CourseImage;
}