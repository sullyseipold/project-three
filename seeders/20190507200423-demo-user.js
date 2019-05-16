'use strict';

module.exports = {
  up: async (queryInterface) => {

    // altering commands
    await queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: '666Coder666'
      },
      {
        firstName: 'Jane',
        lastName: 'Dome',
        email: 'iamjane@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: 'IAmJane420'
      }

    ], {});

    // query to associate to Users to Timesheets
    const users = await queryInterface.sequelize.query(
      'SELECT id from USERS;'
    );

    const userRows = users[0];

    return await queryInterface.bulkInsert('timesheets', [{
        startdate: new Date(),
        enddate: new Date(),
        user_id: userRows[0].id
      },
      {
        startdate: new Date(),
        enddate: new Date(),
        user_id: userRows[0].id
      },

    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('timesheets', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};