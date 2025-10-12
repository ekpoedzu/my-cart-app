
//my current server.js
import path from 'path'; // Node.js module to work with file/directory paths
import express from 'express'; // Express framework for creating the server
import cors from 'cors'; // Middleware to allow cross-origin requests
import dotenv from 'dotenv'; // Load environment variables from .env file
import connectDB from './config/db.js'; // Function to connect to MongoDB

// ✅ Route imports
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
//import stripeRoutes from './routes/stripeRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
//import orderSimpleRoutes from './routes/orderSimpleRoutes.js';

dotenv.config(); // Load .env file into process.env
const app = express(); // Create Express app instance

// ✅ Middleware
app.use(cors()); // Enable CORS (allow frontend to call API)
app.use(express.json()); // Parse incoming JSON requests

// ✅ DB connect
connectDB(); // Connect to MongoDB using Mongoose

// ✅ Mount routes
app.use('/api/admin', adminRoutes); // Admin-only routes
app.use('/api/users', userRoutes); // User management routes
app.use('/api/auth', authRoutes); // Authentication: login/register/reset-password
app.use('/api/orders', orderRoutes); // Order management routes
//app.use('/api/orders/simple', orderSimpleRoutes); // optional simpler order route
app.use('/api/products', productRoutes); // CRUD products
app.use('/api/stripe', paymentRoutes); // Stripe payment intent route
//app.use('/api/stripe', stripeRoutes); // Stripe webhook route

// Serve images statically from backend/images
const __dirname = path.resolve(); 
app.use('/images', express.static(path.join(__dirname, 'images'))); // Allow access to images via /images/<filename>

// ✅ Root route
app.get('/', (req, res) => {
  res.send('API is running...'); // Simple response to check server
});

const PORT = process.env.PORT || 5000; // Use env PORT or 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log("📢 Orders routes mounted");
});




