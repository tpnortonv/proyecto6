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

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🟢 Conectado a MongoDB Atlas"))
    .catch(err => console.error("🔴 Error de conexión a MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`));

