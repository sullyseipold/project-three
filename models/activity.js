// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    timesheet_id: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    // belongsTo(models.Timesheet);
    // associations can be defined here
  };
  return Activity;
};