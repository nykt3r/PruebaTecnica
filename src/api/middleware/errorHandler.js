const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      data: null,
      status: statusCode,
      message: err.message || 'Error interno del servidor'
    });
};
  
module.exports = errorHandler;