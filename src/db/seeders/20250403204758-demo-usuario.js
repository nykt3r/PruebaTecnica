'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Usuarios", [
      {
        nombre: "test1",
        email: "test1@mail.com",
        password: "test1"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  }
};
