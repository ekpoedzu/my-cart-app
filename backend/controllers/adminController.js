import Order from '../models/Order.js';

export const getAllOrdersAdmin = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    // ✅ return an ARRAY (your frontend expects this)
    res.json(orders);
  } catch (error) {
    console.error('ADMIN GET ORDERS ERROR:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
