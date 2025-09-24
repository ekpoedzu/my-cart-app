// resetAdminPassword.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();

const newPassword = 'admin123'; // new password you want for admin
const adminEmail = 'admin@example.com';

const resetPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const result = await User.updateOne(
      { email: adminEmail },
      { password: hashedPassword }
    );

    if (result.matchedCount === 0) {
      console.log('Admin user not found.');
    } else {
      console.log('Admin password updated successfully.');
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error resetting admin password:', error);
  }
};

resetPassword();
