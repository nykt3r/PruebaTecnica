'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Marcas', {
      marcaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull:false,
        type: Sequelize.STRING(20)
      }
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Marcas');
  }
};