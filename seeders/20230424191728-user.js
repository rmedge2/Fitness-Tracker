'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users',
      {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users',
      [{
        firstName: "Rodney",
        lastName: "Edge",
        email: "newmail@gmail.com",
        age: 25,
        weight: 260,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Annie',
        lastName: 'Easley',
        email: 'ajeasley@nasa.gov',
        age: 24,
        weight: 215,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  }
};
