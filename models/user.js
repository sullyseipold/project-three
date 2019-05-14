'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,

    // get full name
    // getterMethods: {
    //   fullName: function () {
    //     return this.firstName + ' ' + this.lastName
    //   }
    // },

    // setterMethods: {
    //   fullName: function (value) {
    //     var names = value.split(' ');

    //     this.setDataValue('firstName', names.slice(0, -1).join(' '));
    //     this.setDataValue('lastName', names.slice(-1).join(' '));
    //   },
    // },


    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      // security measures
      // must contain a number, an uppercase letter, a lowercase letter, and be between 5-20 chars long
      validate: {
        isDecimal: true,          // checks for any numbers
        isUppercase: true,        // checks for uppercase
        isLowercase: true,        // checks for lowercase
        len: [5, 20],              // only allow values with length between 5 and 20
        notNull: true,            // won't allow null
      }
    },

    // boss or employee
    userType: {
      type: DataTypes.STRING,
      values: {
        employee: "Employee",
        boss: "Boss"
      },
      // default user status is employee
      defaultValue: employee,

      // needed to determine UI so cannot be false
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'user'
  });
  User.associate = function (models) {

    // has timesheet which is identified by its fk
    hasMany(models.Timesheet, {

      foreignKey:
      // 'timesheet_id',
      {
        allowNull: true
      }
    });
  };
  return User;
};