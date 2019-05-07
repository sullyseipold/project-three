'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    starttime: DataTypes.DATE,
    endtime: DataTypes.DATE,

    // category recording options (reg hours, overtime, holiday, etc)
    category: {
      type: DataTypes.STRING,
      references: {
        model: Category,
        key: 'id'
      }
    },

  }, {
    sequelize,
    modelName: 'activity'
  });
  Activity.associate = function (models) {

    hasOne(models.Category, {
      onDelete: "CASCADE",
      hooks: true,
      foreignKey: {
        allowNull: false
      }
    });


  };
  return Activity;
};