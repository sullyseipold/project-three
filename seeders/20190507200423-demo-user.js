'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      // altering commands
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: '666Coder666',
        userType: "Employee"
      }], {});
  },

  down: (queryInterface, Sequelize) => {

//       Add reverting commands here. Return a promise to correctly handle asynchronicity.
//  Example:
    return queryInterface.bulkDelete('Users', [{
      firstName: 'John'
    }])
  }
};
