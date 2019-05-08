'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },

    // boss or employee
    userType: {
      type: DataTypes.STRING,
      values: {
        employee: "Employee",
        boss: "Boss"
      },
      // default user status is employee
      defaultValue: "Employee",
      allowNull: true
    }

  }, {
    sequelize,
    modelName: 'user'
  });
  User.associate = function (models) {

    hasOne(models.Timesheet, {
      onDelete: "CASCADE",
      hooks: true,
      foreignKey: 
      // 'timesheet_id'
      {
        allowNull: false
      }
    });
  };
  return User;
};