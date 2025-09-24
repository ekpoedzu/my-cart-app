// backend/seedAdmin.js
/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });

    if (existingAdmin) {
      console.log('✅ Admin already exists:', existingAdmin.email);
    } else {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        isAdmin: true,
      });

      await adminUser.save();
      console.log('🎉 Admin user created: admin@example.com / admin123');
    }

    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding admin:', err.message);
    process.exit(1);
  }
};

seedAdmin();*/



// backend/seedAdmin.js
/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const seedAdmin = async () => {
  try {
    // 🧹 Delete existing admin if exists
    await User.deleteOne({ email: 'admin@example.com' });

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // 👤 Create new admin
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      isAdmin: true,
    });

    await adminUser.save();
    console.log('🎉 Fresh admin created: admin@example.com / admin123');

    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error recreating admin:', err.message);
    process.exit(1);
  }
};

seedAdmin();*/



// backend/seedAdmin.js
/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });

    if (existingAdmin) {
      //console.log('🧹 Removing existing admin:', existingAdmin.email);
      console.log('✅ Admin already exists:', existingAdmin.email);
      await User.deleteOne({ _id: existingAdmin._id });
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      isAdmin: true,
    });

    await adminUser.save();
    console.log('✅ New admin user created: admin@example.com / admin123');

    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding admin:', err.message);
    process.exit(1);
  }
};

seedAdmin();*/


// backend/seedAdmin.js
/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
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
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      const adminUser = new User({
        name: 'Admin User',
        email: adminEmail,
        password: hashedPassword,
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

seedAdmin();*/



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




