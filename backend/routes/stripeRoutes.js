
//current stripe route
/*import express from 'express';
import Stripe from 'stripe';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST /api/stripe/create-payment-intent
router.post('/create-payment-intent', protect, async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body; // amount in cents
    if (!amount) return res.status(400).json({ message: 'Amount required' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      //currency, amount: req.body.amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: {
        userId: req.user._id.toString(),
      },
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('❌ create-payment-intent:', err);
    res.status(500).json({ message: 'Failed to create payment intent' });
  }
});

export default router;*/


// backend/routes/stripeRoutes.js
/*import express from 'express';
import Stripe from 'stripe';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Payment Intent
router.post('/create-payment-intent', protect, async (req, res) => {
  try {
    const { amount } = req.body; // amount in cents
    if (!amount) return res.status(400).json({ message: 'Amount required' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: { userId: req.user._id.toString() }, // optional: track user
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('❌ create-payment-intent:', err);
    res.status(500).json({ message: 'Failed to create payment intent', error: err.message });
  }
});

export default router;*/




/*import express from 'express';
import Stripe from 'stripe';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Normal create-payment-intent route (with protect)
router.post('/create-payment-intent', protect, async (req, res) => {
  // ... your existing code
});

// Stripe webhook (no auth)
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      console.log('💳 Payment succeeded:', paymentIntent.id);
      // TODO: Save order to DB here if you want server-side confirmation
    }

    res.status(200).send('Received');
  } catch (err) {
    console.log('❌ Webhook error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

export default router;*/


















