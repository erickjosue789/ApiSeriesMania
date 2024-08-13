'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = [1, 2]; // Asumiendo que 1 es "cliente" y 2 es "administrador"
    
    await queryInterface.bulkInsert('usuarios', [
      { 
        nombre: 'Nicole', 
        apellido: 'Hu', 
        usuario: 'nicole.hu', 
        contraseña: 'contraseña', 
        role_id: roles[Math.floor(Math.random() * roles.length)], 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        nombre: 'Erick', 
        apellido: 'Valdiviezo', 
        usuario: 'erick.valdiviezo', 
        contraseña: 'contraseña', 
        role_id: roles[Math.floor(Math.random() * roles.length)], 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        nombre: 'Fernando', 
        apellido: 'Vargas', 
        usuario: 'fernando.vargas', 
        contraseña: 'contraseña', 
        role_id: roles[Math.floor(Math.random() * roles.length)], 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};