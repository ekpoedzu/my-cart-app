

//My current PayPalCheckout.jsx
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


  const PayPalCheckout = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const { user } = useAuth(); // ✅ get user info including token
  const navigate = useNavigate();

  const checkoutForm = JSON.parse(localStorage.getItem('checkoutForm')) || {};

  const handleOrderSave = async (details) => {
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // ✅ Add the token if user is logged in
          ...(user?.token && { Authorization: `Bearer ${user.token}` }),
        },
        body: JSON.stringify({
          name: checkoutForm.fullName || '',//Guest
          email: checkoutForm.email || '',
          address: checkoutForm.address || '',
          city: checkoutForm.city || '',
          country: checkoutForm.country || '',
          zip: checkoutForm.zip || '',
          items: cartItems,
          totalAmount,
          paymentStatus: 'paid',
          paymentMethod: 'PayPal',
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to save order');

      clearCart();
      navigate('/success', { state: { order: data } });
    } catch (err) {
      console.error('❌ PayPal order save failed:', err.message);
    }
  };

  return (
    <PayPalButtons
      style={{ layout: 'vertical' }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: totalAmount.toFixed(2),
            },
          }],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        console.log('✅ PayPal payment success:', details);
        await handleOrderSave(details);
      }}
      onError={(err) => {
        console.error('❌ PayPal error:', err);
      }}
    />
  );
};

export default PayPalCheckout;