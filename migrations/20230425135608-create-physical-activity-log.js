'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Physical_Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cycling: {
        type: Sequelize.INTEGER
      },
      Jogging: {
        type: Sequelize.INTEGER
      },
      Pushups: {
        type: Sequelize.INTEGER
      },
      Running: {
        type: Sequelize.INTEGER
      },
      Situps: {
        type: Sequelize.INTEGER
      },
      Squats: {
        type: Sequelize.INTEGER
      },
      Swinning: {
        type: Sequelize.INTEGER
      },
      Walking: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Physical_Activities');
  }
};