
//My currrent  backend/routes/paymentRoutes.js
import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
  try {
    const { items } = req.body;

    // Calculate total (adjust this logic to your needs)
    const totalAmount = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );


   /* if (!totalAmount || isNaN(totalAmount)) {
      return res.status(400).json({ message: 'Invalid or missing totalAmount' });
    }

    const amountInCents = Math.round(totalAmount * 100); // convert to cents*/

    const paymentIntent = await stripe.paymentIntents.create({
     // amount: amountInCents,
       amount: Math.round(totalAmount * 100), // Stripe expects amount in cents
      currency: 'usd',
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('❌ Stripe error:', err.message);
     res.status(500).json({ error: 'Stripe payment failed' })
    //res.status(500).json({ message: 'Payment intent creation failed', error: err.message });
  }
});

export default router;






