import paypal from '@paypal/checkout-server-sdk';

// PayPal environment setup
const environment =
  process.env.PAYPAL_MODE === 'live'
    ? new paypal.core.LiveEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_SECRET
      )
    : new paypal.core.SandboxEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_SECRET
      );

export const paypalClient = new paypal.core.PayPalHttpClient(environment);

// Create PayPal order endpoint
export const createPayPalOrder = async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: req.body.totalPrice.toFixed(2),
        },
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request);
    res.status(200).json(order.result);
  } catch (error) {
    console.error("PayPal create order error:", error);
    res.status(500).json({ message: "PayPal order creation failed" });
  }
};
