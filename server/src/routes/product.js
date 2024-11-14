const express  = require('express');
const { createProduct, getAllProducts, saveReceipt, getPurchases } = require('../controllers/product');
const productRoutes = express.Router();

productRoutes.post('/create-product', createProduct);
productRoutes.get('/get-products', getAllProducts);
productRoutes.post('/save-receipt', saveReceipt);
productRoutes.get('/get-purchases', getPurchases);

module.exports = {
    productRoutes
}