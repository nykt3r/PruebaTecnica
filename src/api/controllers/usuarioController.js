const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UsuarioService = require('../services/usuarioService');

const registrarUsuario = async (req, res, next) => {
    try {
        const usuario = req.body;

        if (!usuario.nombre || !usuario.email || !usuario.password) {
            const error = new Error('Faltan datos obligatorios');
            error.statusCode = 400;
            throw error;        
        }

        const hashedPassword = await bcrypt.hash(usuario.password, 10);
        const usuarioNuevo = await UsuarioService.crearUsuario(usuario, hashedPassword);

        res.status(201).json({
            data: { id: usuarioNuevo.id, nombre: usuarioNuevo.nombre, email: usuarioNuevo.email },
            status: 201,
            message: 'Usuario registrado exitosamente'
        });

    } catch (err) {
        next(err);
    }
};

const ingresarUsuario = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const usuarioIngresar = await UsuarioService.buscarUsuario(email);

        if (!usuarioIngresar || !(await bcrypt.compare(password, usuarioIngresar.password))) {
            const error = new Error('Credenciales incorrectas');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({ id: usuarioIngresar.id, email: usuarioIngresar.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            data: { token },
            status: 200,
            message: 'Ingreso exitoso'
        });

    } catch (err) {
        next(err);
    }
};

module.exports = { registrarUsuario, ingresarUsuario };