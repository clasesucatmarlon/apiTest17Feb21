// Modelo para controlar los productos

const mongoose = require('mongoose');

// Crear esquema
const ProductSchema = new mongoose.Schema( {
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Hogar', 'Entretenimiento', 'Electrónica', 'Tecnología', 'Oficina']
    },
    stock: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// Convertir el esquema en un modelo
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;