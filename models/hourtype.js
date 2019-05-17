'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hourtype = sequelize.define('Hourtype', {
    title: DataTypes.STRING,
    activity_id: DataTypes.INTEGER
  }, {});
  Hourtype.associate = function(models) {
    belongsTo(models.Activity);
    // associations can be defined here
  };
  return Hourtype;
};