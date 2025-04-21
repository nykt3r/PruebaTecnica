'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Carros",[
      {
        modelo:2015,
        descripcion:"Sedan",
        precio: 150000000,
        kilometraje:3000,
        marcaId:1
      },
      {
        modelo:2000,
        descripcion:"Deportivo",
        precio: 300000000,
        kilometraje:0,
        marcaId:1
      },
      {
        modelo:2019,
        descripcion:"Convertible",
        precio: 150000000,
        kilometraje:5000,
        marcaId:2
      },      
      {
        modelo:1999,
        descripcion:"Sedan",
        precio: 50000000,
        kilometraje:30000,
        marcaId:2
      },
      {
        modelo:2025,
        descripcion:"Sedan",
        precio: 90000000,
        kilometraje:0,
        marcaId:3
      },
      {
        modelo:2024,
        descripcion:"Clasico",
        precio: 90000000,
        kilometraje:20000,
        marcaId:3
      },
      {
        modelo:2015,
        descripcion:"Sedan",
        precio: 150000000,
        kilometraje:3000,
        marcaId:4
      },
      {
        modelo:2000,
        descripcion:"Deportivo",
        precio: 300000000,
        kilometraje:0,
        marcaId:4
      },
      {
        modelo:2019,
        descripcion:"Convertible",
        precio: 150000000,
        kilometraje:5000,
        marcaId:5
      },      
      {
        modelo:1999,
        descripcion:"Sedan",
        precio: 50000000,
        kilometraje:30000,
        marcaId:5
      },
      {
        modelo:2025,
        descripcion:"Sedan",
        precio: 90000000,
        kilometraje:0,
        marcaId:6
      },
      {
        modelo:2024,
        descripcion:"Clasico",
        precio: 90000000,
        kilometraje:20000,
        marcaId:6
      },
      {
        modelo:2015,
        descripcion:"Converible",
        precio: 90000000,
        kilometraje:0,
        marcaId:7
      },
      {
        modelo:2019,
        descripcion:"4x4",
        precio: 90000000,
        kilometraje:20000,
        marcaId:7
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carros', null, {});
  }
};
