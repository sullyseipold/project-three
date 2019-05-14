'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {

    startdate: {
      // datetime?
      type: DataTypes.DATE,
      // default clock in time is current time
      defaultValue: DataTypes.NOW,
    },

    // clock out time
    enddate: {
      type: DataTypes.DATE,
    },

    // all hours regardless of their categories
    actualhours: {
      from: {
        $between: [startdate, enddate]
      }
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

    hasOne(models.hourtype, {
      foreignKey: {
        allowNull: false
      }
    })
  };
return Activity;
};