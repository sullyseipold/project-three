'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {

    starttime: DataTypes.DATE,
    endtime: DataTypes.DATE,

    // category recording options (reg hours, overtime, holiday, etc)
    category: {
      type: DataTypes.STRING,
      values: {
        regHours: "Regular Hours",
        ot: "Overtime",
        hol: "Holiday",
        misc: "Other"

      },
      defaultValue: regHours,
      allowNull: true
    },

  }, {
    sequelize,
    modelName: 'activity'
  });
  Activity.associate = function (models) {

    belongsTo(models.Timesheet, {

      onDelete: "CASCADE",
      // hooks: true,
      foreignKey: {
        allowNull: false
      }
    });


  };
  return Activity;
};