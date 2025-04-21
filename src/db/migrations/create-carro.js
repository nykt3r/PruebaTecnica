'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carros', {
      carroId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      descripcion: {
        type: Sequelize.STRING(100)
      },
      precio: {
        allowNull: false,
        type: Sequelize.DECIMAL(11,2)
      },
      kilometraje: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      marcaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Marcas",
          key: "marcaId"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carros');
  }
};