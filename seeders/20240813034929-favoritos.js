'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('favoritos', [
        { usuario_id: 1, serie_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 1, serie_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 1, serie_id: 3, createdAt: new Date(), updatedAt: new Date() }
      ], {});
    } catch (error) {
      console.error('Error inserting data: ', error);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favoritos', null, {});
  }
};
