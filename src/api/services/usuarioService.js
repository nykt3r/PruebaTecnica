const { Usuario } = require('../../db/models');

const buscarUsuario = async (mail) => {
  return await Usuario.findOne({where: {email: mail}});
};
  
const crearUsuario = async (usuario, hashedPassword) => {
  return await Usuario.create({
    nombre:usuario.nombre,
    email:usuario.email,
    password:hashedPassword,
  })
};
  
module.exports = { buscarUsuario, crearUsuario };