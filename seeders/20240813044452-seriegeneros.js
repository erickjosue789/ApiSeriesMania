'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('seriegeneros', [
        { serie_id: 1, genero_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { serie_id: 1, genero_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { serie_id: 2, genero_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { serie_id: 2, genero_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { serie_id: 3, genero_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { serie_id: 3, genero_id: 5, createdAt: new Date(), updatedAt: new Date() }
      ], {});
    } catch (error) {
      console.error('Error inserting data: ', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('seriegeneros', null, {});
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  }
};