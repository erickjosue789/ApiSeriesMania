'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [
      { descripcion: 'cliente', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'administrador', createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
