// backend/routes/paypalRoutes.js
router.post('/create-order', async (req, res) => {
  const { totalPrice } = req.body;
  try {
    const order = await paypalClient.createOrder(totalPrice);
    res.json({ id: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'PayPal order creation failed' });
  }
});
