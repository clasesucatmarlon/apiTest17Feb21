// Ruta para el producto

// Especificar las URL con las que se accede a la API

const express = require('express');
const ProductCtrl =  require('../controllers/ProductController'); //Controlador de productos

const Router = express.Router();

// Asignar ruta al Router (métodos)
Router.get('/', ProductCtrl.index)                                   // api.com/product/  (index)
      .post('/', ProductCtrl.create)                // api.com/product/
      .get('/:key/:value', ProductCtrl.find, ProductCtrl.show)       // api.com/product/category/Hogar  (show)
      .put('/:key/:value', ProductCtrl.find, ProductCtrl.update)     // api.com/product/name/PortatilIntel (update)
      .delete('/:key/:value', ProductCtrl.find, ProductCtrl.remove); // api.com/product/name/PortatilIntel (remove)

module.exports = Router;