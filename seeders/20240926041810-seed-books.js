'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Moby Dick',
        author: 'Herman Melville',
        year: 1851,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data by providing conditions
    return queryInterface.bulkDelete('Books', null, {});
  }
};
