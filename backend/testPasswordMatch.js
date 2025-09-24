import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
dotenv.config();

const testPasswordMatch = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const user = await User.findOne({ email: 'admin@example.com' });
    if (!user) {
      console.log('User not found');
      process.exit(1);
    }
    const isMatch = await user.matchPassword('admin123');
    console.log('Password match:', isMatch);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

testPasswordMatch();
