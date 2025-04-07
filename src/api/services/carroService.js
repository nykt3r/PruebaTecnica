const { Carro, Marca } = require('../../db/models');
const { Op } = require('sequelize');

const buscarCarros = async (limit, offset) => {
  return await Carro.findAndCountAll({
    limit,
    offset,
    include: [{ model: Marca, as: 'marca', attributes: ['nombre'] }]
  });
};

const buscarCarro = async (id) => {
  return await Carro.findOne({
    where: {carroId:id},
    include: [{ model: Marca, as: 'marca', attributes: ['nombre'] }]
  });
};

const crearCarro = async (carro) => {
  return await Carro.create({
    modelo:carro.modelo,
    descripcion:carro.descripcion,
    precio:carro.precio,
    kilometraje:carro.kilometraje,
    marcaId:carro.marcaId
  })
};

const actualizarCarro = async (id, carro) => {
  await Carro.update({
    modelo:carro.modelo,
    descripcion:carro.descripcion,
    precio:carro.precio,
    kilometraje:carro.kilometraje,
    marcaId:carro.marcaId
  }, 
  {
    where: {
      carroId:id
    }
  });

  return await buscarCarro(id);
};

const eliminarCarro = async (id) => {
  return await Carro.destroy({where: {carroId:id}});
};

const construirWhere = (filtros) => {
  const where = {};

  if (filtros.modelo) {
    where.modelo = { [Op.like]: `%${filtros.modelo}%` };
  }

  if (filtros.precioMin || filtros.precioMax) {
    where.precio = {};
    if (filtros.precioMin) where.precio[Op.gte] = Number(filtros.precioMin);
    if (filtros.precioMax) where.precio[Op.lte] = Number(filtros.precioMax);
  }

  if (filtros.kilometrajeMin || filtros.kilometrajeMax) {
    where.kilometraje = {};
    if (filtros.kilometrajeMin) where.kilometraje[Op.gte] = Number(filtros.kilometrajeMin);
    if (filtros.kilometrajeMax) where.kilometraje[Op.lte] = Number(filtros.kilometrajeMax);
  }

  return where;
};

const filtrarCarros = async (filtros) => {
  const where = construirWhere(filtros);

  return await Carro.findAll({
    where,
    include: [{ model: Marca, as: 'marca', attributes: ['nombre'] }]
  });
};


module.exports = { buscarCarros, buscarCarro, crearCarro, actualizarCarro, eliminarCarro, filtrarCarros };