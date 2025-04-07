'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {

    static associate(models) {
      Carro.belongsTo(models.Marca, {
        foreignKey: "marcaId",
        as: "marca" 
      });    
    }
  }

  Carro.init({
    carroId: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    modelo: {
      type:DataTypes.STRING(30),
      allowNull:false
    },
    descripcion:{
      type: DataTypes.STRING(100)
    },
    precio:{
      type:DataTypes.DECIMAL(11,2),
      allowNull:false
    },
    kilometraje:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    marcaId:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model:'Marca',
        key:'marcaId'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    } 
  }, 
  {
    timestamps: false,
    sequelize,
    modelName:'Carro',
  });

  return Carro;

};