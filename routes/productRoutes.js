const express = require('express');
const { createProduct, readAllProducts, readOneProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createProduct);
router.get('/readall', readAllProducts);
router.get('/readone/:id', readOneProduct);
router.put('/update/:id', authMiddleware, updateProduct);
router.delete('/delete/:id', authMiddleware, deleteProduct);

module.exports = router;

