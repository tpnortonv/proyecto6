const express = require('express');
const { registerUser, loginUser, verifyToken, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para verificar el token

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verifytoken', authMiddleware, verifyToken); // Agregar la ruta GET
router.put('/update', authMiddleware, updateUser); 

module.exports = router;

