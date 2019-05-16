'use strict';

// import moment for date conversion

module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {

    // dateonly??
    // startdate must be on a sunday?
    startdate: {
      type: DataTypes.DATE,
      allowNull: false
    },

    // enddate must be on a saturday?
    enddate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    // these values can be used in timesheet seeders or in a query
    // payperiod of 7 days -- can be determined in timesheet model query
  }, {
    sequelize,
    modelName: 'timesheet'
  });

  Timesheet.associate = function (models) {

    belongsTo(models.User, {
      as: 'timesheet',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
      // foreignKey: 'timesheet_id'
    });

    // has activities 
    hasMany(models.Activity, {
      allowNull: true
      // foreignKey: 'activity_id'
    })

  };
  return Timesheet;
};