'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hourtypes', [{

      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Hourtypes', null, {});
  }
};
