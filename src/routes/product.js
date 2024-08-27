const express  = require('express');
const { createProduct, getAllProducts } = require('../controllers/product');
const productRoutes = express.Router();

productRoutes.post('/create-product', createProduct);
productRoutes.get('/get-products', getAllProducts);

module.exports = {
    productRoutes
}