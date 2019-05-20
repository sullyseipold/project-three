// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize, modelName: 'timesheet'
  });
  Timesheet.associate = function(models) {
    // belongsTo(models.User);
    // associations can be defined here
    // need to sync
  };
  return Timesheet;
};