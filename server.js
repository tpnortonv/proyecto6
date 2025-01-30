const connectDB = require('./config/db.js')
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

app.use(express.json());  // Para recibir JSON en las requests
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`));