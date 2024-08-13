'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('Favoritos', [
        { usuario_id: 1, serie_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 1, serie_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 1, serie_id: 3, createdAt: new Date(), updatedAt: new Date() }
      ], {});
    } catch (error) {
      console.error('Error inserting data: ', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('Favoritos', {
        usuario_id: 1
      }, {});
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  }
};
