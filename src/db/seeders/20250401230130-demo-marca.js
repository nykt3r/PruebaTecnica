'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Marcas', [
      {
        nombre: "Toyota",
      },
      {
        nombre: "Honda",
      },
      {
        nombre: "Ford",
      },
      {
        nombre: "Chevrolet",
      },
      {
        nombre: "Nissan",
      },
      {
        nombre: "Hyundai",
      },
      {
        nombre: "Kia",
      },
      {
        nombre: "Volkswagen",
      },
      {
        nombre: "Subaru",
      },
      {
        nombre: "Mazda",
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};
