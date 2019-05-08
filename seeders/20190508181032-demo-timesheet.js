'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Timesheets', [{
      startdate: new Date(),
      enddate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),

      // belong to user
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Timesheets', null, {});
  }
};