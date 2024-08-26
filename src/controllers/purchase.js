const Purchase = require('../models/purchase');
const Product = require('../models/product');

export const createPurchase = async (req, res) => {
    try {
        const { products } = req.body;
        let totalAmount = 0;
        const purchaseProducts = [];

        for (let item of products) {
            const product = await Product.findById(item.productId);
            if(!product) {
                return res.status(404).json({
                    status: 'fail',
                    message: `Product not found with id ${item.productId}`
                });
            }
        }
        if (product.quantity < item.quantity) {
            return res.status(400).json({
                status: 'fail',
                message: `Insufficient quantity for product ${product.name}`
            });
        }

        const itemTotal = product.price * item.quantity;
        totalAmount += itemTotal;

        purhcaseProducts.push({
            product: product._id,
            quant
        });


    }
}