
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

