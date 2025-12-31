
//working payment
/*import React, { useEffect, useState, useContext } from 'react';
import { useCart } from '../context/CartContext';
import { AuthContext, useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const StripeCheckoutForm = ({ amount, onPaymentSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      const { data } = await axios.post('/api/stripe/create-payment-intent', { amount });
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: user?.name, email: user?.email },
        },
      });

      if (result.error) {
        onError(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        // Build full paymentResult object
        const paymentResult = {
          id: result.paymentIntent.id,
          status: result.paymentIntent.status,
          update_time: new Date().toISOString(),
          email_address: user?.email,
          method: 'Stripe'
        };
        onPaymentSuccess(paymentResult);
      }
    } catch (err) {
      onError('Payment failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <CardElement />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Pay with Stripe
      </button>
    </form>
  );
};

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [{ isPending }] = usePayPalScriptReducer();

  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('checkoutForm')) || {};
    setShippingAddress({
      fullName: storedData.fullName || '',
      email: storedData.email || '',
      address: storedData.address || '',
      city: storedData.city || '',
      country: storedData.country || '',
      postalCode: storedData.postalCode || '',
    });
  }, []);

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = +(0.15 * itemsPrice).toFixed(2);
  const totalPrice = +(itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const handlePlaceOrder = async (paymentResult) => {
    try {
      const orderData = {
        userName: shippingAddress.fullName,
        userEmail: shippingAddress.email,
        orderItems: cartItems.map(item => ({
          product: item._id,
          name: item.name,
          qty: item.quantity,
          price: item.price,
          image: item.image,
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        isPaid: true,
        paidAt: new Date(),
        paymentResult, // ✅ include full payment info
      };

      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error('Failed to save order');
      const data = await res.json();
      clearCart();
      navigate('/success', { state: { order: data } });
    } catch (err) {
      setError(err.message || 'Order saving failed');
    }
  };

  const handlePayPalApprove = async (data, actions) => {
    const payment = await actions.order.capture();

    const paypalShipping = payment.purchase_units?.[0]?.shipping;
    const finalShipping = {
      fullName: paypalShipping?.name?.full_name || shippingAddress.fullName,
      email: payment.payer?.email_address || shippingAddress.email,
      address: paypalShipping?.address?.address_line_1 || shippingAddress.address,
      city: paypalShipping?.address?.admin_area_2 || shippingAddress.city,
      postalCode: paypalShipping?.address?.postal_code || shippingAddress.postalCode,
      country: paypalShipping?.address?.country_code || shippingAddress.country,
    };

    const paymentResult = {
      id: payment.id,
      status: payment.status,
      update_time: payment.update_time,
      email_address: payment.payer?.email_address,
      method: 'PayPal'
    };

    await handlePlaceOrder(paymentResult);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Shipping Info</h3>
        <p><strong>Name:</strong> {shippingAddress.fullName}</p>
        <p><strong>Email:</strong> {shippingAddress.email}</p>
        <p>
          <strong>Address:</strong> {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order Summary</h3>
        <p>Items: ${itemsPrice.toFixed(2)}</p>
        <p>Shipping: ${shippingPrice.toFixed(2)}</p>
        <p>Tax: ${taxPrice.toFixed(2)}</p>
        <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Payment Method</h3>
        <select
          className="border p-2 w-full"
          value={paymentMethod}
          onChange={e => setPaymentMethod(e.target.value)}
        >
          <option value="PayPal">PayPal</option>
          <option value="Stripe">Stripe</option>
        </select>
      </div>

      {paymentMethod === 'PayPal' && (
        <div className="mt-4">
          {isPending ? <p>Loading PayPal...</p> : <PayPalButtons
            createOrder={(data, actions) => actions.order.create({
              purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }],
            })}
            onApprove={handlePayPalApprove}
            onError={() => setError('PayPal Payment Failed')}
          />}
        </div>
      )}

      {paymentMethod === 'Stripe' && (
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm
            amount={totalPrice * 100}
            onPaymentSuccess={handlePlaceOrder}
            onError={setError}
          />
        </Elements>
      )}

      {error && <p className="text-red-600 mt-4">❌ {error}</p>}
    </div>
  );
};

export default () => (
  <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, currency: "USD", intent: "capture" }}>
    <Payment />
  </PayPalScriptProvider>
);*/


// ===== Payment.jsx =====

// React core imports
/*import React, { useEffect, useState, useContext } from 'react';

// Import custom cart context (to get cart items, clear cart, etc.)
import { useCart } from '../context/CartContext';

// Import custom auth context (to access logged-in user and token)
import { AuthContext, useAuth } from '../context/AuthContext';

// Navigation helper from React Router
import { useNavigate } from 'react-router-dom';

// PayPal SDK components
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

// Stripe SDK components
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// HTTP client for backend requests
import axios from 'axios';

// ====== Stripe setup ======
// Load Stripe public key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Stripe checkout form component (renders card input + handles confirmation)
const StripeCheckoutForm = ({ amount, onPaymentSuccess, onError }) => {
  const stripe = useStripe();      // Stripe instance
  const elements = useElements();  // Access to form elements
  const { user } = useContext(AuthContext); // Get logged-in user info

  // Handle Stripe form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form reload
    if (!stripe || !elements) return;

    try {
      // 1. Ask backend to create a PaymentIntent for the given amount
      const { data } = await axios.post('/api/stripe/create-payment-intent', { amount });
      const clientSecret = data.clientSecret;

      // 2. Confirm payment on the client side with card details
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement), // Card details entered
          billing_details: { 
            name: user?.name, 
            email: user?.email 
          },
        },
      });

      // 3. Handle result
      if (result.error) {
        // Payment failed
        onError(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        // Build a payment result object to store in order
        const paymentResult = {
          id: result.paymentIntent.id,
          status: result.paymentIntent.status,
          update_time: new Date().toISOString(),
          email_address: user?.email,
          method: 'Stripe'
        };
        // Notify parent (Payment component) of success
        onPaymentSuccess(paymentResult);
      }
    } catch (err) {
      // Any unexpected error
      onError('Payment failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <CardElement /> // Stripe’s card input field 
      <button
        type="submit"
        disabled={!stripe}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Pay with Stripe
      </button>
    </form>
  );
};

// ===== Main Payment Component =====
const Payment = () => {
  // Cart state
  const { cartItems, clearCart } = useCart();

  // Auth state
  const { user, token } = useAuth();

  // For navigation after success
  const navigate = useNavigate();

  // PayPal SDK state (e.g., loading status)
  const [{ isPending }] = usePayPalScriptReducer();

  // Shipping address form state
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  // Payment method selected by user ("PayPal" or "Stripe")
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  // For displaying errors
  const [error, setError] = useState('');

  // Load any saved checkout form from localStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('checkoutForm')) || {};
    setShippingAddress({
      fullName: storedData.fullName || '',
      email: storedData.email || '',
      address: storedData.address || '',
      city: storedData.city || '',
      country: storedData.country || '',
      postalCode: storedData.postalCode || '',
    });
  }, []);

  // ===== Price calculations =====
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10; // Free shipping over $100
  const taxPrice = +(0.15 * itemsPrice).toFixed(2); // 15% tax
  const totalPrice = +(itemsPrice + shippingPrice + taxPrice).toFixed(2);

  // ===== Save order in DB =====
  const handlePlaceOrder = async (paymentResult) => {
    try {
      const orderData = {
        userName: shippingAddress.fullName,
        userEmail: shippingAddress.email,
        orderItems: cartItems.map(item => ({
          product: item._id,
          name: item.name,
          qty: item.quantity,
          price: item.price,
          image: item.image,
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        isPaid: true,
        paidAt: new Date(),
        paymentResult, // Include PayPal/Stripe payment info
      };

      // Send order to backend API
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Secure with JWT
        },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error('Failed to save order');
      const data = await res.json();

      // Clear cart and redirect to success page
      clearCart();
      navigate('/success', { state: { order: data } });
    } catch (err) {
      setError(err.message || 'Order saving failed');
    }
  };

  // ===== Handle PayPal approval =====
  const handlePayPalApprove = async (data, actions) => {
    // Capture payment from PayPal
    const payment = await actions.order.capture();

    // Extract shipping info from PayPal response
    const paypalShipping = payment.purchase_units?.[0]?.shipping;
    const finalShipping = {
      fullName: paypalShipping?.name?.full_name || shippingAddress.fullName,
      email: payment.payer?.email_address || shippingAddress.email,
      address: paypalShipping?.address?.address_line_1 || shippingAddress.address,
      city: paypalShipping?.address?.admin_area_2 || shippingAddress.city,
      postalCode: paypalShipping?.address?.postal_code || shippingAddress.postalCode,
      country: paypalShipping?.address?.country_code || shippingAddress.country,
    };

    // Build payment result object for DB
    const paymentResult = {
      id: payment.id,
      status: payment.status,
      update_time: payment.update_time,
      email_address: payment.payer?.email_address,
      method: 'PayPal'
    };

    // Save order in DB
    await handlePlaceOrder(paymentResult);
  };

  // ===== UI Rendering =====
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>

      // Shipping Info 
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Shipping Info</h3>
        <p><strong>Name:</strong> {shippingAddress.fullName}</p>
        <p><strong>Email:</strong> {shippingAddress.email}</p>
        <p>
          <strong>Address:</strong> {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
        </p>
      </div>

      // Order Summary 
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order Summary</h3>
        <p>Items: ${itemsPrice.toFixed(2)}</p>
        <p>Shipping: ${shippingPrice.toFixed(2)}</p>
        <p>Tax: ${taxPrice.toFixed(2)}</p>
        <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      //Payment Method Selector 
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Payment Method</h3>
        <select
          className="border p-2 w-full"
          value={paymentMethod}
          onChange={e => setPaymentMethod(e.target.value)}
        >
          <option value="PayPal">PayPal</option>
          <option value="Stripe">Stripe</option>
        </select>
      </div>

      // PayPal Option 
      {paymentMethod === 'PayPal' && (
        <div className="mt-4">
          {isPending ? <p>Loading PayPal...</p> : (
            <PayPalButtons
              createOrder={(data, actions) => actions.order.create({
                purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }],
              })}
              onApprove={handlePayPalApprove}
              onError={() => setError('PayPal Payment Failed')}
            />
          )}
        </div>
      )}

      //Stripe Option 
      {paymentMethod === 'Stripe' && (
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm
            amount={totalPrice * 100} // Stripe works in cents
            onPaymentSuccess={handlePlaceOrder}
            onError={setError}
          />
        </Elements>
      )}

      // Error display 
      {error && <p className="text-red-600 mt-4">❌ {error}</p>}
    </div>
  );
};

// Wrap Payment in PayPalScriptProvider to load PayPal SDK
export default () => (
  <PayPalScriptProvider options={{ 
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, 
    currency: "USD", 
    intent: "capture" 
  }}>
    <Payment />
  </PayPalScriptProvider>
);*/



// ================== IMPORTS ================== //
// React imports
import React, { useEffect, useState, useContext } from 'react';
// Cart context (to access cart items and clear cart after order)
import { useCart } from '../context/CartContext';
// Auth context (to access user info + auth token)
import { AuthContext, useAuth } from '../context/AuthContext';
// React Router (to navigate after payment success)
import { useNavigate } from 'react-router-dom';

// PayPal SDK imports
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

// Stripe SDK imports
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// HTTP requests
import axios from 'axios';

// ================== STRIPE SETUP ================== //
// Load Stripe public key from .env (frontend key)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// ================== STRIPE CHECKOUT FORM ================== //
const StripeCheckoutForm = ({ amount, onPaymentSuccess, onError }) => {
  const stripe = useStripe(); // Hook to interact with Stripe
  const elements = useElements(); // Hook to access form elements (CardElement)
  const { user } = useContext(AuthContext); // Get logged-in user info

  // Handle Stripe payment form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!stripe || !elements) return; // Ensure Stripe is initialized

    try {
      // Call backend to create a PaymentIntent
      const { data } = await axios.post('/api/stripe/create-payment-intent', { amount });
      const clientSecret = data.clientSecret; // Secret for confirming payment

      // Confirm card payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement), // Card input from form
          billing_details: { 
            name: user?.name, 
            email: user?.email 
          },
        },
      });

      // Handle errors
      if (result.error) {
        onError(result.error.message);
      } 
      // If payment succeeded
      else if (result.paymentIntent.status === 'succeeded') {
        // Build a consistent paymentResult object
        const paymentResult = {
          id: result.paymentIntent.id,
          status: result.paymentIntent.status,
          update_time: new Date().toISOString(),
          email_address: user?.email,
          method: 'Stripe'
        };
        onPaymentSuccess(paymentResult); // Pass result back up
      }
    } catch (err) {
      onError('Payment failed');
    }
  };

  // Stripe form UI
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      {/* Input field for credit card */}
      <CardElement />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Pay with Stripe
      </button>
    </form>
  );
};

// ================== MAIN PAYMENT COMPONENT ================== //
const Payment = () => {
  const { cartItems, clearCart } = useCart(); // Cart data
  const { user, token } = useAuth(); // User + auth token
  const navigate = useNavigate(); // Redirect on success
  const [{ isPending }] = usePayPalScriptReducer(); // Track PayPal script loading state

  // Shipping address state (prefilled from checkout form or PayPal)
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  // Default payment method = PayPal
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const [error, setError] = useState('');

  // Load saved checkout form (from localStorage)
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('checkoutForm')) || {};
    setShippingAddress({
      fullName: storedData.fullName || '',
      email: storedData.email || '',
      address: storedData.address || '',
      city: storedData.city || '',
      country: storedData.country || '',
      postalCode: storedData.postalCode || '',
    });
  }, []);

  // ========== PRICE CALCULATIONS ========== //
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // subtotal
  const shippingPrice = itemsPrice > 100 ? 0 : 10; // free shipping if > $100
  const taxPrice = +(0.15 * itemsPrice).toFixed(2); // 15% tax
  const totalPrice = +(itemsPrice + shippingPrice + taxPrice).toFixed(2); // final total

  // ========== SAVE ORDER TO BACKEND ========== //
  const handlePlaceOrder = async (paymentResult) => {
    try {
      // Build order object to send to backend
      const orderData = {
        userName: shippingAddress.fullName,
        userEmail: shippingAddress.email,
        orderItems: cartItems.map(item => ({
          product: item._id,
          name: item.name,
          qty: item.quantity,
          price: item.price,
          image: item.image,
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        isPaid: true,
        paidAt: new Date(),
        paymentResult, // store payment details (PayPal or Stripe)
      };

      // Send order to backend
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // 🔑 user authentication
        },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error('Failed to save order');
      const data = await res.json();

      // Clear cart + redirect to success page with order details
      clearCart();
      navigate('/success', { state: { order: data } });
    } catch (err) {
      setError(err.message || 'Order saving failed');
    }
  };

  // ========== HANDLE PAYPAL APPROVAL ========== //
  const handlePayPalApprove = async (data, actions) => {
    const payment = await actions.order.capture(); // Capture funds after approval

    // Extract PayPal shipping info
    const paypalShipping = payment.purchase_units?.[0]?.shipping;
    const finalShipping = {
      fullName: paypalShipping?.name?.full_name || shippingAddress.fullName,
      email: payment.payer?.email_address || shippingAddress.email,
      address: paypalShipping?.address?.address_line_1 || shippingAddress.address,
      city: paypalShipping?.address?.admin_area_2 || shippingAddress.city,
      postalCode: paypalShipping?.address?.postal_code || shippingAddress.postalCode,
      country: paypalShipping?.address?.country_code || shippingAddress.country,
    };

    // Create a standardized payment result object
    const paymentResult = {
      id: payment.id,
      status: payment.status,
      update_time: payment.update_time,
      email_address: payment.payer?.email_address,
      method: 'PayPal'
    };

    // Save order
    await handlePlaceOrder(paymentResult);
  };

  // ================== RENDER ================== //
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>

      {/* Shipping summary */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Shipping Info</h3>
        <p><strong>Name:</strong> {shippingAddress.fullName}</p>
        <p><strong>Email:</strong> {shippingAddress.email}</p>
        <p>
          <strong>Address:</strong> {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
        </p>
      </div>

      {/* Order summary */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order Summary</h3>
        <p>Items: ${itemsPrice.toFixed(2)}</p>
        <p>Shipping: ${shippingPrice.toFixed(2)}</p>
        <p>Tax: ${taxPrice.toFixed(2)}</p>
        <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      {/* Payment method selector */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Payment Method</h3>
        <select
          className="border p-2 w-full"
          value={paymentMethod}
          onChange={e => setPaymentMethod(e.target.value)}
        >
          <option value="PayPal">PayPal</option>
          <option value="Stripe">Stripe</option>
        </select>
      </div>

      {/* PayPal UI */}
      {paymentMethod === 'PayPal' && (
        <div className="mt-4">
          {isPending ? (
            <p>Loading PayPal...</p>
          ) : (
            <PayPalButtons
              createOrder={(data, actions) => actions.order.create({
                purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }],
              })}
              onApprove={handlePayPalApprove}
              onError={() => setError('PayPal Payment Failed')}
            />
          )}
        </div>
      )}

      {/* Stripe UI */}
      {paymentMethod === 'Stripe' && (
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm
            amount={totalPrice * 100} // Stripe needs cents
            onPaymentSuccess={handlePlaceOrder}
            onError={setError}
          />
        </Elements>
      )}

      {/* Error messages */}
      {error && <p className="text-red-600 mt-4">❌ {error}</p>}
    </div>
  );
};

// ================== EXPORT ================== //
// Wrap Payment component with PayPal provider
export default () => (
  <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, currency: "USD", intent: "capture" }}>
    <Payment />
  </PayPalScriptProvider>
);








