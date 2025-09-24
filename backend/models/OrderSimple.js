// models/OrderSimple.js
/*const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    product: { type: String }, // keep flexible for now
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    image: { type: String },
  },
  { _id: false }
);

const orderSimpleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zip: { type: String, required: true },

    items: { type: [itemSchema], validate: v => Array.isArray(v) && v.length > 0 },
    totalAmount: { type: Number, required: true, min: 0 },

    paymentMethod: { type: String, enum: ['PayPal', 'Stripe', 'None'], default: 'None' },
    paymentStatus: { type: String, enum: ['PENDING', 'COMPLETED', 'FAILED'], default: 'PENDING' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('OrderSimple', orderSimpleSchema);*/


// models/OrderSimple.js
import mongoose from 'mongoose';

const orderSimpleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  items: [
    {
      productId: String,
      name: String,
      qty: Number,
      price: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, default: 'None' },
  paymentStatus: { type: String, default: 'PENDING' },
}, { timestamps: true });

const OrderSimple = mongoose.model('OrderSimple', orderSimpleSchema);

export default OrderSimple;

