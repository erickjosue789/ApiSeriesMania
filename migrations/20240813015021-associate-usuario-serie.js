'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('favoritos', {
      fields: ['usuario_id'],
      name: 'usuario_id_fk',
      type: 'foreign key',
      references: {
        table: 'usuarios',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });


    await queryInterface.addConstraint('favoritos', {
      fields: ['serie_id'],
      name: 'serie_id_fk',
      type: 'foreign key',
      references: {
        table: 'series',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('favoritos', 'usuario_id_fk')
    await queryInterface.removeConstraint('favoritos', 'serie_id_fk')
  }
};
