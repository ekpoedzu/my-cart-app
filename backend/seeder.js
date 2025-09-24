//My seeder.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const products = [
  {
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
  {
    name: 'Organic Honey Jarey',
    price: 15,
    description: 'Raw unfiltered organic honey.',
    category: 'Food',
    stock: 4,
    image: '/images/honey.jpg',
  },
  {
    name: 'Organic Gari',
    price: 15,
    description: 'Delicious crispy gari.',
    category: 'Food',
    stock: 10,
    image: '/images/gari.jpg',
  },
  {
    name: 'Unique Scarf',
    price: 15,
    description: 'Elegant unique scarf.',
    category: 'Clothing',
    stock: 10,
    image: '/images/scarf.jpg',
  },
  {
    name: 'Breaded Bracelet',
    price: 15,
    description: 'Gostic Handmade unique collection.',
    category: 'Handmade',
    stock: 10,
    image: '/images/bracelet.jpg',
  },
];

try {
  await Product.deleteMany(); // Optional: clears existing products
  await Product.insertMany(products);
  console.log('✅ Products seeded successfully');
  process.exit();
} catch (err) {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
}