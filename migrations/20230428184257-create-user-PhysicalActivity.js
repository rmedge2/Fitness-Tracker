'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPhysicalActivity', {
      PhysicalActivityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Physical_Activities',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('UserPhysicalActivity')
  }
};
