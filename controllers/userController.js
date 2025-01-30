const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Usuario ya existe' });

    const user = await User.create({ name, email, password });
    res.status(201).json({ id: user._id, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }
    res.status(200).json({ id: user._id, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifyToken = (req, res) => {
  res.json({ message: 'Token válido', user: req.user });
};

exports.updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findById(req.user.id); // Usar `req.user.id` que viene del middleware de autenticación
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    // Actualizar solo los campos proporcionados
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password; // Asegúrate de encriptar la contraseña si la actualizas

    await user.save();
    res.status(200).json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};