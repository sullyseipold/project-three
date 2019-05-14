'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hourtypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      values: {
        type: Sequelize.STRING,

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
      // defaultValue: reg,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hourtypes');
  }
};