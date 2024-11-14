const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  customer: {
    type: String,
    trim: true
    required: true
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  receiptNumber: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;