'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserNutritionLog', {
      NutritionLogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Nutrition_logs',
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
    await queryInterface.dropTable('UserNutritionLog');
  }
};
