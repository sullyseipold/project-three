'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        title: DataTypes.STRING,
        isclockedin: {
            type: DataTypes.BOOLEAN,
            // allowNull: false
        },

        // Reference /api/category for json object
        // types: DataTypes.JSON,

    }, {
        sequelize,
        modelName: 'category'
    });

    Category.associate = function (models) {
        // associations can be defined here

        // belongs to Activity
        belongsTo(models.Activity, {
            as: 'category',
            foreignKey: 'category_id'
        })
    };
    return Category;
};