const Product = require('../models/product');

export const createProduct = async (req, res) => {
    try {
        const { name, price, quantity, description } = req.body;
        const product = await product = await Product.create({
            name,
            price,
            quantity,
            description,
            createdBy: req.user._id
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
    }
}

export const getAllProducts = async (req, res) => {
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
}