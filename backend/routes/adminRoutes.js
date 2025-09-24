//current AdminRoutes
import express from 'express';
//import { getAllOrders } from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Admin: Get all orders
//router.get('/orders', protect, adminOnly);

export default router;
