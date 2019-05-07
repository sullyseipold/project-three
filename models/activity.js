'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    starttime: DataTypes.DATE,
    endtime: DataTypes.DATE,

    // category recording options (reg hours, overtime, holiday, etc)
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  }, {});
  Activity.associate = function(models) {

    // associations can be defined here
    // belongs to timesheet? employee?
  };
  return Activity;
};