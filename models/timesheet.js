'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'timesheet'
  });

  Timesheet.associate = function (models) {

    belongsTo(models.User, {
      as: 'timesheet',
      foreignKey: 'timesheet_id'
    });
    hasMany(models.Activity, {
      allowNull: false,
      foreignKey: 'activity_id'
    })

  };
return Timesheet;
};