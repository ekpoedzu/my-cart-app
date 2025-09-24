/*import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orderSimpleController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/my-orders', getUserOrders);


// routes/orderSimpleRoutes.js
//const express = require('express');
const OrderSimple = require('../models/OrderSimple');
//const router = express.Router();

// POST /api/orders/simple
router.post('/', async (req, res) => {
  try {
    const {
      name, email, address, city, country, zip,
      items, totalAmount, paymentMethod = 'None', paymentStatus = 'PENDING'
    } = req.body;

    // Minimal validation
    if (!name || !email || !address || !city || !country || !zip) {
      return res.status(400).json({ message: 'Shipping info is incomplete' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }
    if (typeof totalAmount !== 'number' || totalAmount <= 0) {
      return res.status(400).json({ message: 'totalAmount must be > 0' });
    }

    const order = await OrderSimple.create({
      name, email, address, city, country, zip,
      items, totalAmount, paymentMethod, paymentStatus
    });

    return res.status(201).json(order);
  } catch (err) {
    console.error('Create simple order error:', err);
    return res.status(500).json({ message: 'Server error creating order' });
  }
});

module.exports = router;*/


// routes/orderSimpleRoutes.js
/*import express from 'express';
import OrderSimple from '../models/OrderSimple.js';

const router = express.Router();

// POST /api/orders/simple
router.post('/', async (req, res) => {
  try {
    const {
      name, email, address, city, country, zip,
      items, totalAmount, paymentMethod = 'None', paymentStatus = 'PENDING'
    } = req.body;

    // Minimal validation
    if (!name || !email || !address || !city || !country || !zip) {
      return res.status(400).json({ message: 'Shipping info is incomplete' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }
    if (typeof totalAmount !== 'number' || totalAmount <= 0) {
      return res.status(400).json({ message: 'totalAmount must be > 0' });
    }

    const order = await OrderSimple.create({
      name, email, address, city, country, zip,
      items, totalAmount, paymentMethod, paymentStatus
    });

    return res.status(201).json(order);
  } catch (err) {
    console.error('Create simple order error:', err);
    return res.status(500).json({ message: 'Server error creating order' });
  }
});

export default router;*/

//my current file
/*import express from 'express';
import OrderSimple from '../models/OrderSimple.js';
//import { createOrder, getUserOrders } from '../controllers/orderSimpleController.js';
import { saveOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/my-orders', getUserOrders);

// POST /api/orders/simple
router.post('/', async (req, res) => {
  try {
    const {
      name, email, address, city, country, zip,
      items, totalAmount, paymentMethod = 'None', paymentStatus = 'PENDING'
    } = req.body;

    // Minimal validation
    if (!name || !email || !address || !city || !country || !zip) {
      return res.status(400).json({ message: 'Shipping info is incomplete' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }
    if (typeof totalAmount !== 'number' || totalAmount <= 0) {
      return res.status(400).json({ message: 'totalAmount must be > 0' });
    }

    const order = await OrderSimple.create({
      name, email, address, city, country, zip,
      items, totalAmount, paymentMethod, paymentStatus
    });

    return res.status(201).json(order);
  } catch (err) {
    console.error('Create simple order error:', err);
    return res.status(500).json({ message: 'Server error creating order' });
  }
});

export default router;*/


/*import express from 'express';
import OrderSimple from '../models/OrderSimple.js';

const router = express.Router();

// ✅ Create a simple order (guest checkout)
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      city,
      country,
      zip,
      items,
      totalAmount,
      paymentMethod = 'None',
      paymentStatus = 'PENDING',
    } = req.body;

    // Minimal validation
    if (!name || !email || !address || !city || !country || !zip) {
      return res.status(400).json({ message: 'Shipping info is incomplete' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }
    if (typeof totalAmount !== 'number' || totalAmount <= 0) {
      return res.status(400).json({ message: 'totalAmount must be > 0' });
    }

    const order = await OrderSimple.create({
      name,
      email,
      address,
      city,
      country,
      zip,
      items,
      totalAmount,
      paymentMethod,
      paymentStatus,
    });

    return res.status(201).json(order);
  } catch (err) {
    console.error('❌ Create simple order error:', err);
    return res.status(500).json({ message: 'Server error creating order' });
  }
});

export default router;*/



