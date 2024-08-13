'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('generos', [
      { descripcion: 'drama', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'science-fiction', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'thriller', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'action', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'crime', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'horror', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'romance', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'adventure', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'espionage', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'music', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'mystery', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'supernatural', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'fantasy', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'family', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'anime', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'comedy', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'history', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'medical', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'legal', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'wester', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'war', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'sports', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('generos', null, {});
  }
};
