'use strict';

// import moment for date conversion

module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {

    // dateonly??
    // startdate must be on a sunday
    startdate: {
      type: DataTypes.DATE,
      allowNull: false,

      // return moment conversion
      // get: function() {
      //   return moment.utc(this.getDataValue('startdate')).format('YYYY-MM-DD');
      // },
    },

    // enddate must be on a saturday
    enddate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    // total hours of activities for each hour between startdate and enddate range
    totalhours: {
      // reference activity model for info on
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
      foreignKey: 'timesheet_id'
    });

    // has activities 
    hasMany(models.Activity, {
      allowNull: false,
      foreignKey: 'activity_id'
    })

  };
  return Timesheet;
};