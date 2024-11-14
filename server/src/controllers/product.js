const { Product, Purchase } = require('../models/product');
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

const saveReceipt = async (req, res) => {
    try {
        const { productId, quantity, totalPrice, date, customerName } = req.body;
        
        // Create a new order using the Order model
        const purchase = new Purchase({
            productId,
            quantity,
            totalPrice,
            date,
            customerName,
        });

        // Save the order to the database
        await purchase.save();
        res.status(201).send(purchase);
    } catch (error) {
        res.status(400).send(error);
        console.error('Error saving receipt:', error);
    }
};

const getPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find(); // Fetch all purchases from the database
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: "Error fetching purchases", error });
        console.error('Error fetching purchases:', error);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    saveReceipt,
    getPurchases
}