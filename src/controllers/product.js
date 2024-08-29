const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const { name, price, quantity, description } = req.body;
        const product = await Product.create({
            name,
            price,
            quantity,
            description,
            createdBy: '66cdd9ed4ffae0b94ee5b12e'
        });
        res.status(201).json({
            status: 'success',
            data: { product }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
        console.log(error);
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            status: 'success',
            results: products.length,
            data: { products }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts
}