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

    userType: {
      type: DataTypes.BOOLEAN,
      // is employee if true. upon login, db searches emails in 'users' table if to see if id is associated with emplpyee or admin
      defaultValue: true
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
  //  {
  //   classMethods: {
  //     associate: function (models) {

  //       User.hasOne(models.Timesheet);
  //     }
  //   }
  // });
  return User;
};