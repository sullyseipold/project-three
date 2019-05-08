'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Activities', [{

        starttime: new Date(),
        endtime: new Date (),
        createdAt: new Date(),
        updatedAt: new Date(),

      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Activities', null, {});
  }
};
