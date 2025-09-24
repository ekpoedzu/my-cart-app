
// backend/seeder/dropOrders.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from '../models/Order.js';       // go up one folder
import connectDB from '../config/db.js';     // optional, if you have a connectDB function

dotenv.config();

const dropOrders = async () => {
  try {
    // Connect to MongoDB
    await connectDB(); // if you don’t have a connectDB function, use mongoose.connect(process.env.MONGO_URI)

    // Drop the orders collection
    await Order.collection.drop();
    console.log('✅ Orders collection dropped successfully.');

    process.exit();
  } catch (error) {
    if (error.code === 26) {
      console.log('⚠️ Orders collection does not exist, nothing to drop.');
    } else {
      console.error('❌ Error dropping orders:', error);
    }
    process.exit(1);
  }
};

dropOrders();

