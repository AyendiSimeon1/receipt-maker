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
            quantity: item.quantity,
            price: product.price
        });
        
        product.quantity -= item.quantity;
        await product.save();
        
        const receiptNumber  = 'R' + Date.now();
    const purchase = await Purchase.create({
        customer: req.user._id,
        products: purchaseProducts,
        totalAmount,
        receiptNumber
    });

    res.status(201).json({
        status: 'success',
        data: {
            purchase,
            receipt: generateReceipt(purchase)
        }
    });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }

    
};

function generateReceipt(purchase) {
    let receipt = `
        Receipt Number: ${purchase.receiptNumber}
        Date: ${purchase.createdAt}
        ---------------------------------------
        Items:
    `;
    purchase.products.forEach(item => {
    receipt += `${item.product.name} x ${item.quantity}: $${item.price * item.quantiy}\n`;

    });

    receipt += `--------------------------------
    Total Amount: $${purchase.totalAmount}
    Thank you for your purchase!
    `;

    return receipt;
}