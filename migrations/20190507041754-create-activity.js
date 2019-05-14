'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startdate: {
        type: Sequelize.DATE
        // defaultValue: Sequelize.NOW,
      },
      enddate: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING
      },
      actualhours: {
        from: {
          $between: [startdate, enddate]
        }
      },
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
    return queryInterface.dropTable('Activities');
  }
};