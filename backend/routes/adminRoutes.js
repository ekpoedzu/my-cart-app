//current AdminRoutes
/*import express from 'express';
import { getAllOrders } from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Admin: Get all orders
router.get('/orders', protect, adminOnly);

export default router;*/


/*import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import { getAllOrdersAdmin } from '../controllers/adminController.js';

const router = express.Router();

// ✅ Admin: Get all orders
router.get('/orders', protect, adminOnly, getAllOrdersAdmin);

export default router;*/

/*import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import Order from '../models/Order.js';

const router = express.Router();

// ✅ Admin: Get ALL orders
// GET /api/admin/orders
router.get('/orders', protect, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.json(orders); // IMPORTANT: return an ARRAY
  } catch (err) {
    console.error('ADMIN GET ORDERS ERROR:', err);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

export default router;*/


import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import Order from '../models/Order.js';

const router = express.Router();

// Admin: Get all orders
router.get('/orders', protect, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.json(orders); // IMPORTANT: return an ARRAY
  } catch (err) {
    console.error('Admin orders error:', err);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

export default router;




