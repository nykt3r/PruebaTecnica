'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('test', 10);

    await queryInterface.bulkInsert("Usuarios", [
      {
        id: uuidv4(),
        nombre: "test",
        email: "test@mail.com",
        password: hashedPassword
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  }
};
