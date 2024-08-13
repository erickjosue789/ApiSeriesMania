'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('seriegeneros', {
      fields: ['serie_id'],
      name: 'seriegenero_serie_id_fk',
      type: 'foreign key',
      references: {
        table: 'series',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });


    await queryInterface.addConstraint('seriegeneros', {
      fields: ['genero_id'],
      name: 'genero_id_fk',
      type: 'foreign key',
      references: {
        table: 'generos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('seriegeneros', 'seriegenero_serie_id_fk')
    await queryInterface.removeConstraint('seriegeneros', 'genero_id_fk')
  }
};
