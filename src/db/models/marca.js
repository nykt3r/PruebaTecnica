'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {

    static associate(models) {
      Marca.hasMany(models.Carro, {
        foreignKey:'marcaId',
        as:'carros'
      });    
    }
  }

  Marca.init({
    marcaId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    nombre:{
      allowNull:false,
      type:DataTypes.STRING(20)
    }
  }, 
  {
    timestamps: false,
    sequelize,
    modelName:'Marca',
  });

  return Marca;
  
};