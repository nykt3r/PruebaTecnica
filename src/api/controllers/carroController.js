const CarroService = require('../services/carroService');

const visualizarCarros = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const carros = await CarroService.buscarCarros(limit, offset);
    
    res.json({
      data: carros.rows,
      status: 200,
      message: 'Respuesta ok',
      total: carros.count,
      totalPages: Math.ceil(carros.count / limit),
      currentPage: page
    }); 
     
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error en el servidor', error });
  }
};

const visualizarCarro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const carro = await CarroService.buscarCarro(id);

    if (!carro) {
      const error = new Error('El carro buscado no existe');
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: carro, status: 200, message: 'Respuesta ok' });

  } catch (err) {
    next(err);
  }
};

const crearCarro = async (req, res, next) => {
  try {
    const carro = req.body;

    if (!carro.modelo || !carro.precio || !carro.kilometraje || !carro.marcaId) {
      const error = new Error('Todos los campos obligatorios deben estar presentes.');
      error.statusCode = 400;
      throw error;
    }

    const carroNuevo = await CarroService.crearCarro(carro);
    res.status(201).json({ data: carroNuevo, status: 201, message: 'Auto agregado correctamente' });

  } catch (err) {
    next(err);
  }
};

const actualizarCarro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const carro = req.body;

    if (!carro.modelo || !carro.precio || !carro.kilometraje || !carro.marcaId) {
      const error = new Error('Todos los campos obligatorios deben estar presentes');
      error.statusCode = 400;
      throw error;
    }

    const carroActualizar = await CarroService.buscarCarro(id);

    if (!carroActualizar) {
      const error = new Error('El carro a actualizar no existe');
      error.statusCode = 404;
      throw error;
    }

    const carroActualizado = await CarroService.actualizarCarro(id, carro);

    res.status(200).json({ data: carroActualizado, status: 200, message: 'Auto actualizado correctamente' });

  } catch (err) {
    next(err);
  }
};

const eliminarCarro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const carroEliminar = await CarroService.buscarCarro(id);

    if (!carroEliminar) {
      const error = new Error('El carro a eliminar no existe');
      error.statusCode = 404;
      throw error; 
    }

    const carroEliminado = await CarroService.eliminarCarro(id);

    res.status(200).json({ data: carroEliminado, status: 200, message: 'Auto eliminado correctamente' });
    
  } catch (err) {
    next(err);
  }
};

const filtrarCarros = async (req, res, next) => {
  try {
    const filtros = req.query;
    const carrosFiltrados = await CarroService.filtrarCarros(filtros);

    if (!carrosFiltrados || carrosFiltrados.length === 0) {
      const error = new Error('No existen autos con dichas características.');
      error.status = 404;
      throw error;
    }

    res.json({
      data: carrosFiltrados,
      status: 200,
      message: 'Filtrado exitoso'
    });

  } catch (err) {
    next(err);
  }
};

module.exports = { visualizarCarros, visualizarCarro, crearCarro, actualizarCarro, eliminarCarro, filtrarCarros };