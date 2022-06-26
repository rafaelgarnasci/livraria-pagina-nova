'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', [
       {
     title: 'O homem mais rico da Babilônia',
     edition_year: '2017',
     author: 'George Samuel Clason',
     pages: 160,
     inventory: 100,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      title: 'Pai rico, pai pobre',
      edition_year: '2017',
      author: 'Robert T. Kiyosaki',
      pages: 336,
      inventory: 50,
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
