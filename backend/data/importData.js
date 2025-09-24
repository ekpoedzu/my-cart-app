// backend/data/importData.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './products.js';
import Product from '../models/Product.js';
import connectDB from '../config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products);
    console.log('✅ Data Imported!');
    process.exit();
  } catch (error) {
    console.error('❌ Error with data import:', error);
    process.exit(1);
  }
};

importData();
