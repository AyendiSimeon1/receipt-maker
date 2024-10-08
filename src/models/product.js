const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        tim: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true});

const purchaseSchema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    }
  });

const Product = mongoose.model('Product', productSchema);

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = { Product, Purchase };