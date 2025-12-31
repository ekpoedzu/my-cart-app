/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.country.trim()) newErrors.country = 'Country is required';
    if (!form.zip.trim()) newErrors.zip = 'ZIP code is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Here you'd normally send data to backend / start payment
    navigate('/success'); // Simulate payment success
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input name="fullName" value={form.fullName} onChange={handleChange} />
          {errors.fullName && <span style={{ color: 'red' }}>{errors.fullName}</span>}
        </label>
        <br />

        <label>
          Email:
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </label>
        <br />

        <label>
          Address:
          <input name="address" value={form.address} onChange={handleChange} />
          {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
        </label>
        <br />

        <label>
          City:
          <input name="city" value={form.city} onChange={handleChange} />
          {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
        </label>
        <br />

        <label>
          Country:
          <input name="country" value={form.country} onChange={handleChange} />
          {errors.country && <span style={{ color: 'red' }}>{errors.country}</span>}
        </label>
        <br />

        <label>
          ZIP / Postal Code:
          <input name="zip" value={form.zip} onChange={handleChange} />
          {errors.zip && <span style={{ color: 'red' }}>{errors.zip}</span>}
        </label>
        <br />

        <button type="submit" style={{ marginTop: '1rem' }}>Proceed to Payment</button>
      </form>
    </div>
  );
};

export default CheckoutForm;*/


// src/pages/CheckoutForm.jsx
/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can also store form data in context or localStorage here
    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Checkout Information</h2>
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="address"
        placeholder="Shipping Address"
        value={form.address}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Proceed to Payment</button>
    </form>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default CheckoutForm;*/

/*import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cartItems, totalAmount, clearCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    console.log('✅ PaymentMethod created:', paymentMethod);

    const userDetails = JSON.parse(localStorage.getItem('checkoutForm')) || {};

    await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...userDetails,
        items: cartItems,
        totalAmount,
        paymentStatus: 'paid',
      }),
    });

    clearCart();
    navigate('/success');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Pay with Card</h3>
      <CardElement options={cardStyle} />
      {error && <p style={styles.error}>{error}</p>}
      <button type="submit" disabled={!stripe || loading} style={styles.button}>
        {loading ? 'Processing…' : 'Pay Now'}
      </button>
    </form>
  );
};

const cardStyle = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
      '::placeholder': { color: '#aab7c4' },
    },
    invalid: { color: '#fa755a' },
  },
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    backgroundColor: '#5469d4',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: { color: 'red', marginTop: '1rem' },
};

export default StripeCheckoutForm;*/


//CheckoutForm
/*import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import StripeCheckoutForm from '../components/StripeCheckoutForm'; // adjust path if needed
import API from '../utils/axios';




const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('checkoutForm', JSON.stringify(formData));
    navigate('/payment');
  };

  // Example usage:
const placeOrder = async (orderData) => {
  const { data } = await API.post('/orders', orderData); // Token is sent automatically
  return data;
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shipping Info</h2>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="address" placeholder="Address" onChange={handleChange} required />
      <input name="city" placeholder="City" onChange={handleChange} required />
      <input name="country" placeholder="Country" onChange={handleChange} required />
      <input name="zip" placeholder="Zip" onChange={handleChange} required />

      <button type="submit">Continue to Payment</button>
    </form>
  );
};

export default CheckoutForm;*/



/*import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from '../utils/axios'; // custom axios instance
i//mport API from '../utils/axios';

import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const placeOrder = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/orders', {
        items: cartItems,
        shippingAddress,
        paymentMethod,
        totalAmount,
      });

      clearCart();
      navigate('/success', { state: { order: response.data } });
    } catch (err) {
      console.error('❌ Order failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Order failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to place an order.');
      return;
    }
    placeOrder();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Postal Code</label>
          <input
            type="text"
            value={shippingAddress.postalCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input
            type="text"
            value={shippingAddress.country}
            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? 'Placing Order...' : `Place Order ($${totalAmount.toFixed(2)})`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;*/




/*import React, { useEffect, useState } from 'react';
//import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState('');

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);

    const total = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !token) {
      alert('You must be logged in to place an order.');
      navigate('/login');
      return;
    }

    try {
      const orderData = {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod: 'CashOnDelivery',
        itemsPrice: totalAmount,
        totalPrice: totalAmount,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post('/api/orders', orderData, config);
      localStorage.removeItem('cartItems');
      navigate(`/order-success/${response.data._id}`);
    } catch (error) {
      console.error('❌ Order creation failed:', error.response?.data || error.message);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    {/*<div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Shipping Address:
          <textarea
            className="w-full border p-2 mt-1"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            required
          />
        </label>

        <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Postal Code</label>
          <input
            type="text"
            value={shippingAddress.postalCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input
            type="text"
            value={shippingAddress.country}
            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
          </select>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-1">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;*/




/*import React, { useEffect, useState } from 'react';
import axios from '../utils/axios'; // Ensure this file exists
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);

    const total = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !token) {
      alert('You must be logged in to place an order.');
      navigate('/login');
      return;
    }

    try {
      const orderData = {
        items: cartItems,
        shippingAddress,
        paymentMethod,
        totalAmount
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post('/api/orders', orderData, config);

      localStorage.removeItem('cartItems');
      navigate(`/order-success/${response.data._id}`);
    } catch (error) {
      console.error('Order creation failed:', error.response?.data || error.message);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name.name}
            onChange={(e) => setName({ ...name, name: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="text"
            value={email.email}
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Postal Code</label>
          <input
            type="text"
            value={shippingAddress.postalCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input
            type="text"
            value={shippingAddress.country}
            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-1">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;*/



/*import React, { useEffect, useState } from 'react';
//import axios from '../utils/axios'; // Ensure this file exists
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);

    const total = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);

    // Optional: auto-fill user info from context
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !token) {
      alert('You must be logged in to place an order.');
      navigate('/login');
      return;
    }

    try {
      const orderData = {
        items: cartItems,
        shippingAddress,
        paymentMethod,
        totalAmount,
        customerInfo: { name, email } // optional to send
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post('/api/orders', orderData, config);

      localStorage.removeItem('cartItems');
      navigate(`/order-success/${response.data._id}`);
    } catch (error) {
      console.error('Order creation failed:', error.response?.data || error.message);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Postal Code</label>
          <input
            type="text"
            value={shippingAddress.postalCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input
            type="text"
            value={shippingAddress.country}
            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-1">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;*/



/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/payment', { state: { shippingAddress } });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <label className="block">
        Shipping Address:
        <input
          type="text"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
          className="w-full border p-2 mt-1"
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Continue to Payment
      </button>
    </form>
  );
};

export default CheckoutForm;*/



//current CheckoutForm

/*import { useCart } from '../context/CartContext';
//import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';



const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { user, token } = useAuth();


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data locally before navigating to payment page
    localStorage.setItem('checkoutForm', JSON.stringify(formData));

    // Optionally save cart too
    localStorage.setItem('checkoutCart', JSON.stringify(cartItems));

    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="country"
        placeholder="Country"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="zip"
        placeholder="Zip"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default CheckoutForm;*/

//my current CheckoutForm.jsx
/*import { useCart } from '../context/CartContext';
//import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare shipping address with expected keys for backend
    const shippingAddress = {
      address: formData.address || '',
      city: formData.city || '',
      postalCode: formData.zip || '',
      country: formData.country || '',
    };

    // Save shipping info to localStorage under the correct key
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));

    // Optionally save cart items if needed elsewhere
    localStorage.setItem('checkoutCart', JSON.stringify(cartItems));

    // Proceed to payment page
    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="country"
        placeholder="Country"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="zip"
        placeholder="Zip"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default CheckoutForm;*/



//working fully file
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();

  // Prefill form with user info if available
  useEffect(() => {
    setFormData({
      fullName: user?.name || '',
      email: user?.email || '',
      address: '',
      city: '',
      country: '',
      zip: '',
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save full shipping info including name & email
    const shippingAddress = {
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      postalCode: formData.zip,
      country: formData.country,
    };

    localStorage.setItem('checkoutForm', JSON.stringify(shippingAddress));//this avoid default localStorage shipping address
    localStorage.setItem('checkoutCart', JSON.stringify(cartItems));

    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName || ''}
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="address"
        placeholder="Address"
        value={formData.address || ''}
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="city"
        placeholder="City"
        value={formData.city || ''}
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="country"
        placeholder="Country"
        value={formData.country || ''}
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="zip"
        placeholder="Zip"
        value={formData.zip || ''}
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default CheckoutForm;





