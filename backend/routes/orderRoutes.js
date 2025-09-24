
//current orderRoutes.js
import express from 'express';
import { createPayPalOrder } from '../controllers/paymentController.js';
import {
  addOrder,
  getMyOrders,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create PayPal order
router.post('/paypal/create-order', protect, createPayPalOrder);

// ✅ Place a new order (user)
router.post('/', protect, addOrder);

// ✅ Get logged-in user's orders
router.get('/myorders', protect, getMyOrders);

// ✅ Admin: Get all orders
router.get('/', protect, adminOnly, getOrders);

// ✅ Get order by ID (admin only)
//router.get('/:id', protect, adminOnly, getOrderById);
// ✅ Get order by ID (user can only fetch their own, admin can fetch any)
router.get('/:id', protect, getOrderById);

// ✅ Admin: Update order status
router.put('/:id/status', protect, adminOnly, updateOrderStatus);

// ✅ Admin: Delete order
router.delete('/:id', protect, adminOnly, deleteOrder);

/*const res = await axios.get('/api/orders', {
  headers: { Authorization: `Bearer ${adminToken}` },
});
setOrders(res.data);*/


export default router;






















