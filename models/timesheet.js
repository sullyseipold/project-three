'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, 
  {});
  Timesheet.associate = function(models) {

    hasMany(models.Activity, {
      onDelete: "CASCADE",

      // Get info about Activity -
      foreinKey: {
        allowNull: false
      }

    })
    // associations can be defined here
  };
  return Timesheet;
};