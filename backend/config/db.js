
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // make sure this is at the top


const mongoURI = process.env.MONGO_URI;// Use env variable

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected to mycartdb (Atlas)');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;




