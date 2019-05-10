'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {

    starttime: {
      // datetime?
      type: DataTypes.DATE,
      // default clock in time is current time
      defaultValue: DataTypes.NOW,

      references: {
        // reference start date column in timesheet
        model: Timesheet,

        // column name of the referenced model
        // starttime should be put in the startdate column
        key: 'startdate',
      }
    },

    // clock out time
    endtime: {
      type: DataTypes.DATE,

      // cannot be null

      references: {
        // reference start date column in timesheet
        model: Timesheet,

        // column name of the referenced model
        key: 'enddate',
      }
    },

    // all hours regardless of their categories
    // startDate and endDate are Javascript Date object
    actualhours: {
      from: {
        $between: [starttime, endtime]
      }
    },


    // category recording options (reg hours, overtime, holiday, etc)
    // each hourtype has a starttime and endtime
    // upon entering st and et, the amount of ti
    hourTypes: {
      // total time worked 
      // amount of hours rounded to 2 decimal places
      // type: DataTypes.DECIMAL(10, 2),

      // string category labels
      type: DataTypes.STRING,

      // regularly scheduled hours
      reg: {
        // category title name for table header
        title: "Regular Hours",
        // cannot be null beacuse it is used to determine overtime hours
        allowNull: false,

      },

      // overnight hours
      // if clock in time occurs on a new day - includes hours between 12 am and 5 am
      overnight: {
        title: "Overnight Hours",
        defaultValue: 0,
        // value:
      },

      // holiday
      holiday: {
        title: "Holiday Hours",
        defaultValue: 0,
      },



      // comp used
      compUsed: {
        title: "Comp Used",
        allowNull: true,
      },

      // time between reghours.endtime and actualhours.endtime
      overtime: {
        title: "Overtime Hours",
        allowNull: true,
      },

      sick: {
        title: "Sick Hours",
        defaultValue: 0,
      },

      vacation: {
        title: "Vacation Hours",
        defaultValue: 0
      },

    },

  }, {
    sequelize,
    modelName: 'activity'
  });
  Activity.associate = function (models) {

    belongsTo(models.Timesheet, {

      foreignKey: {
        allowNull: false
      }
    });


  };
  return Activity;
};