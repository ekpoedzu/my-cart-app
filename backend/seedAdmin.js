
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log('✅ Admin already exists:', existingAdmin.email);
    } else {
      const adminUser = new User({
        name: 'Admin User',
        email: adminEmail,
        password: adminPassword, // pass plain password here!
        isAdmin: true,
      });

      await adminUser.save();
      console.log(`🎉 New admin user created: ${adminEmail} / ${adminPassword}`);
    }

    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Failed to seed admin user:', error);
    process.exit(1);
  }
};

seedAdmin();




