'use strict';
module.exports = (sequelize, DataTypes) => {
  const hourtype = sequelize.define('hourtype', {
    // category recording options (reg hours, overtime, holiday, etc)
    // each hourtype has a starttime and endtime
    // type: DataTypes.STRING,
    values: {
      type: DataTypes.STRING,
      // regularly scheduled hours
      reg: "Regular Hours",
      // overnight hours
      overnight: "Overnight Hours",
      holiday: "Holiday Hours",
      compUsed: "Comp Used",
      overtime: "Overtime Hours",
      sick: "Sick Hours",
      vacation: "Vacation Hours",
    },

    // defaultValue: reg

  }, {});
  hourtype.associate = function (models) {
    belongsTo(models.Activity, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return hourtype;
};